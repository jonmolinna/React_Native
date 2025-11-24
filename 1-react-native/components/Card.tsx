import { AppColors, FontFamily, FontSizes, Spacing } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
    title: string;
    description: string;
    isDark?: boolean;
}

export default function Card({ title, description, isDark = true }: CardProps) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: isDark ? AppColors.background.dark : AppColors.background.light }
        ]}>
            <Text style={[
                styles.title,
                { color: isDark ? AppColors.text.primary : AppColors.text.dark }
            ]}>
                {title}
            </Text>
            <Text style={[
                styles.description,
                { color: isDark ? AppColors.text.secondary : AppColors.text.dark }
            ]}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: AppColors.border,
        marginBottom: Spacing.md,
    },
    title: {
        fontSize: FontSizes.xl,
        fontFamily: FontFamily.bold,
        marginBottom: Spacing.sm,
    },
    description: {
        fontSize: FontSizes.md,
        fontFamily: FontFamily.regular,
        lineHeight: FontSizes.md * 1.5,
    }
});
