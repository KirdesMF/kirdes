import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v8/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZg.ttf',
      fontWeight: 900,
      fontStyle: 'bold',
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 'normal',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// Create Document Component
export function PDFResume() {
  return (
    <Document title="Gourville Cedric CV">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Cedric</Text>
            <Text style={styles.title}>Gourville</Text>
            <Text style={styles.text}>web developer</Text>
          </View>
          <View style={styles.social}>
            <Link src="mailto:cedgourville@gmail.com" style={styles.text}>
              cedgourville@gmail.com
            </Link>
            <Link src="https://github.com/KirdesMF" style={styles.text}>
              github
            </Link>
            <Link
              src="https://www.linkedin.com/in/cedric-gourville/"
              style={styles.text}
            >
              linkedin
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  );
}
