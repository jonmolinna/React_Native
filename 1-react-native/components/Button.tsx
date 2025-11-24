import { AppColors, FontFamily, FontSizes, Spacing } from '@/constants/theme';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
    disabled?: boolean;
}

export default function Button({ 
    title, 
    onPress, 
    variant = 'primary',
    loading = false,
    disabled = false 
}: ButtonProps) {
    const getButtonStyle = () => {
        switch (variant) {
            case 'secondary':
                return styles.secondaryButton;
            case 'outline':
                return styles.outlineButton;
            default:
                return styles.primaryButton;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'outline':
                return styles.outlineText;
            default:
                return styles.buttonText;
        }
    };

    return (
        <Pressable 
            style={[
                styles.button, 
                getButtonStyle(),
                (disabled || loading) && styles.disabled
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={AppColors.text.primary} />
            ) : (
                <Text style={[styles.baseText, getTextStyle()]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: Spacing.md,
        borderRadius: Spacing.sm,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
    },
    primaryButton: {
        backgroundColor: AppColors.primary,
    },
    secondaryButton: {
        backgroundColor: AppColors.secondary,
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: AppColors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
    baseText: {
        fontSize: FontSizes.md,
        fontFamily: FontFamily.semibold,
    },
    buttonText: {
        color: AppColors.text.primary,
    },
    outlineText: {
        color: AppColors.primary,
    },
});
