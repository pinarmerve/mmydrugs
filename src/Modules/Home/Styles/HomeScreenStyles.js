import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.home.background],
    },
    listContainer: {
        marginTop: Metrics.marginHorizontalLarge * 0.4,
        flexGrow: 1,
    },
    add_deleteIconContainer: {
        position: 'absolute',
        bottom: Metrics.width * 0.05,
        right: Metrics.width * 0.05,
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
    },
    add_deleteIcon: {
        color: Colors[cn.home.addIcon],
    },
    cancelIconContainer: {
        position: 'absolute',
        bottom: Metrics.width * 0.15,
        right: Metrics.width * 0.05,
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
    },
    cancelIcon: {
        color: Colors[cn.home.addIcon]
    }
});
