import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#d5d5d5',
  },
  section: {
    margin: 20,
    padding: 25,
    flexGrow: 1,
  },
});

// Create Document Component
export function PDFResume() {
  return (
    <Document title="Gourville Cedric CV">
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Ced</Text>
        </View>
        <View style={styles.section}>
          <Text>Kirdes</Text>
        </View>
      </Page>
    </Document>
  );
}
