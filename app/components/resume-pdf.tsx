import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

Font.register({
  src: 'https://fonts.gstatic.com/s/leaguegothic/v4/qFdR35CBi4tvBz81xy7WG7ep-BQAY7Krj7feObpH_-am.ttf',
  family: 'League Gothic',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },

  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  text: {
    fontFamily: 'League Gothic',
    fontSize: 12,
  },
});

// Create Document Component
export function PDFResume({ src }: { src?: string }) {
  return (
    <Document title="Gourville Cedric CV">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.text}>
            Animé et passionnée par le web, autodidacte et curieux, j'ai décidé
            de validé mon parcours en tant que développeur web. ok baby
          </Text>
        </View>
      </Page>
    </Document>
  );
}
