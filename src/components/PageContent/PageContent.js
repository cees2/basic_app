import Header from "../Header/Header";
import StorageItemList from "../MainContent/StorageItemsList";
import ClearStorageButton from "../MainContent/ClearStorageButton";
import classes from './PageContent.module.css';

const PageContent = () => {
    return <div className={classes.pageContent}>
        <Header />
        <StorageItemList />
        <ClearStorageButton />
    </div>
}

export default PageContent;