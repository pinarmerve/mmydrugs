import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors[cn.addApplication.background],
        paddingTop: Metrics.width * 0.07,
    },
    buttonContainer: {
        marginBottom: Metrics.marginHorizontal * 0.4,
    }
});
