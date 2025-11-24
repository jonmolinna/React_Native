import Card from '@/components/Card';
import { AppColors, FontFamily, FontSizes, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExampleScreen() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <ScrollView 
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? AppColors.background.dark : AppColors.background.light }
            ]}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={[
                    styles.title,
                    { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                ]}>
                    Mi App
                </Text>
                <Text style={[
                    styles.subtitle,
                    { color: isDarkMode ? AppColors.text.secondary : AppColors.text.dark }
                ]}>
                    Ejemplo de variables globales
                </Text>
            </View>

            {/* Botón para cambiar tema */}
            <Pressable 
                style={styles.button}
                onPress={() => setIsDarkMode(!isDarkMode)}
            >
                <Text style={styles.buttonText}>
                    Cambiar a modo {isDarkMode ? 'Light' : 'Dark'}
                </Text>
            </Pressable>

            {/* Cards de ejemplo */}
            <View style={styles.cardContainer}>
                <Card 
                    title="Título 1"
                    description="Esta card usa las variables globales de color y fuentes"
                    isDark={isDarkMode}
                />
                <Card 
                    title="Título 2"
                    description="Los colores cambian según el modo dark o light"
                    isDark={isDarkMode}
                />
                <Card 
                    title="Título 3"
                    description="Las fuentes son Poppins y los espaciados son consistentes"
                    isDark={isDarkMode}
                />
            </View>

            {/* Sección de colores */}
            <View style={styles.colorSection}>
                <Text style={[
                    styles.sectionTitle,
                    { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                ]}>
                    Colores disponibles:
                </Text>
                
                <View style={styles.colorBox}>
                    <View style={[styles.colorSwatch, { backgroundColor: AppColors.primary }]} />
                    <Text style={[
                        styles.colorLabel,
                        { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                    ]}>
                        Primary: {AppColors.primary}
                    </Text>
                </View>

                <View style={styles.colorBox}>
                    <View style={[styles.colorSwatch, { backgroundColor: AppColors.secondary }]} />
                    <Text style={[
                        styles.colorLabel,
                        { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                    ]}>
                        Secondary: {AppColors.secondary}
                    </Text>
                </View>

                <View style={styles.colorBox}>
                    <View style={[styles.colorSwatch, { backgroundColor: AppColors.border }]} />
                    <Text style={[
                        styles.colorLabel,
                        { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                    ]}>
                        Border: {AppColors.border}
                    </Text>
                </View>
            </View>

            {/* Sección de fuentes */}
            <View style={styles.fontSection}>
                <Text style={[
                    styles.sectionTitle,
                    { color: isDarkMode ? AppColors.text.primary : AppColors.text.dark }
                ]}>
                    Fuentes Poppins:
                </Text>
                
                <Text style={[
                    styles.fontExample,
                    { 
                        fontFamily: FontFamily.regular,
                        color: isDarkMode ? AppColors.text.primary : AppColors.text.dark 
                    }
                ]}>
                    Regular - Poppins Regular
                </Text>

                <Text style={[
                    styles.fontExample,
                    { 
                        fontFamily: FontFamily.medium,
                        color: isDarkMode ? AppColors.text.primary : AppColors.text.dark 
                    }
                ]}>
                    Medium - Poppins Medium
                </Text>

                <Text style={[
                    styles.fontExample,
                    { 
                        fontFamily: FontFamily.semibold,
                        color: isDarkMode ? AppColors.text.primary : AppColors.text.dark 
                    }
                ]}>
                    SemiBold - Poppins SemiBold
                </Text>

                <Text style={[
                    styles.fontExample,
                    { 
                        fontFamily: FontFamily.bold,
                        color: isDarkMode ? AppColors.text.primary : AppColors.text.dark 
                    }
                ]}>
                    Bold - Poppins Bold
                </Text>

                <Text style={[
                    styles.fontExample,
                    { 
                        fontFamily: FontFamily.light,
                        color: isDarkMode ? AppColors.text.primary : AppColors.text.dark 
                    }
                ]}>
                    Light - Poppins Light
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: Spacing.xl,
        paddingTop: Spacing.xxl,
    },
    title: {
        fontSize: FontSizes.xxl,
        fontFamily: FontFamily.bold,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        fontSize: FontSizes.md,
        fontFamily: FontFamily.regular,
    },
    button: {
        backgroundColor: AppColors.primary,
        padding: Spacing.md,
        marginHorizontal: Spacing.xl,
        borderRadius: Spacing.sm,
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    buttonText: {
        color: AppColors.text.primary,
        fontSize: FontSizes.md,
        fontFamily: FontFamily.semibold,
    },
    cardContainer: {
        paddingHorizontal: Spacing.xl,
    },
    colorSection: {
        padding: Spacing.xl,
        marginTop: Spacing.lg,
    },
    sectionTitle: {
        fontSize: FontSizes.lg,
        fontFamily: FontFamily.bold,
        marginBottom: Spacing.md,
    },
    colorBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    colorSwatch: {
        width: 40,
        height: 40,
        borderRadius: Spacing.sm,
        marginRight: Spacing.md,
    },
    colorLabel: {
        fontSize: FontSizes.sm,
        fontFamily: FontFamily.regular,
    },
    fontSection: {
        padding: Spacing.xl,
    },
    fontExample: {
        fontSize: FontSizes.lg,
        marginBottom: Spacing.sm,
    },
});
