import Trend from '~/components/Trend';
import ListSearch from '~/components/ListSearch';
import Qc from '~/components/QC';
import VideosRender from '~/layouts/components/VideosRender';
function Home() {
    return (
        <div
            style={{
                width: 'calc(var(--default-layout-width) / 100 * 80)',
            }}
        >
            <ListSearch />
            <div
                style={{
                    paddingTop: 'calc(var(--default-layout-header-height) - 13px)',
                    display: 'flex',
                }}
            >
                <Trend />
                <Qc />
            </div>
            <VideosRender />
        </div>
    );
}

export default Home;
