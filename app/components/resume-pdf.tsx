import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'Epilogue',
  src: 'public/fonts/Epilogue-Regular.ttf',
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
    fontFamily: 'Epilogue',
    fontSize: 12,
  },
});

// Create Document Component
export function PDFResume({ src }: { src?: string }) {
  return (
    <Document title="Gourville Cedric CV">
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={'public/img/kirdes.jpg'} style={styles.img} />
        </View>
        <View>
          <Text style={styles.text}>
            Animé et passionnée par le web, autodidacte et curieux, j'ai décidé
            de validé mon parcours en tant que développeur web.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
