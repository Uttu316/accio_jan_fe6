import {
  MdAllInclusive,
  MdMan,
  MdWoman,
  MdDevices,
  MdDiamond,
} from "react-icons/md";
import styles from "./productFilters.module.css";

const filters = [
  { value: "all", label: "All", icon: <MdAllInclusive /> },
  { value: "men's clothing", label: "Men's Clothing", icon: <MdMan /> },
  { value: "women's clothing", label: "Women's Clothing", icon: <MdWoman /> },
  { value: "electronics", label: "Electronics", icon: <MdDevices /> },
  { value: "jewelery", label: "Jewelery", icon: <MdDiamond /> },
];
const ProductFilters = ({ setCurrFilter, currFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.filterList}>
        {filters.map((filter) => (
          <FilterItem
            key={filter.value}
            value={filter.value}
            label={filter.label}
            icon={filter.icon}
            active={currFilter}
            setCurrFilter={setCurrFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;

const FilterItem = ({ label, setCurrFilter, icon, active, value }) => {
  const isActive = active === value;
  return (
    <button
      onClick={() => setCurrFilter(value)}
      className={`${styles.filterItem} ${isActive ? styles.active : ""}`}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};
