export const structure = `
class NoNeedForClassHere extends React.Component {
    state = {
      isModalOpened: false,
    };
  
    openModal = () => this.setState({ isModalOpened: true });
  
    closeModal = () => this.setState({ isModalOpened: false });
  
    render() {
      const { isModalOpened } = this.state;
      return (
        <Box>
          <Button onClick={this.openModal} prefixIcon={<Icons.OpenModal />}>
            Open Modal
          </Button>
          <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
            <Box
              direction="vertical"
              padding="30px"
              border="dashed 1px white"
              width="600px"
              height="600px"
            >
              <Text light>Modal Content goes here</Text>
              <TextButton
                onClick={this.closeModal}
                underline="always"
                skin="light"
              >
                Close Modal
              </TextButton>
            </Box>
          </Modal>
        </Box>
      );
    }
  }
`;
