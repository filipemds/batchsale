import React from 'react';
import { Layout, Card, Input, Form, Row, Col, Checkbox } from 'antd';

const Campaign = () => {
  return (
    <Card>
      <Card>
        <Form>
          <Row gutter={16}>
            <Col span={2}>
              <Form.Item label="Campaign">
                <Input placeholder="3" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Start Date">
                <Input placeholder="01/11/2010" />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="End Date">
                <Input placeholder="02/05/2010" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label="Heat Nº">
                <Input placeholder="93" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Steel Calc.Qty.">
                <Input placeholder=",000" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Steel Act.Qty.">
                <Input placeholder="11.532,000" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Specif.Cons.">
                <Input placeholder="4,591" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item label="Status">
                <Input placeholder="Encerrada" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Row gutter={16}>
          <Col span={12}>
            <Card>
              {/* Left Card */}
              <Row>
                <Col span={4}>
                  <Form.Item label="Heat Qty.">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="Oven Pot">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="RH">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col>

                </Col>

              </Row>
              <Row>
                <Col span={4}>
                  <Form.Item label="">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="AHF">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="IRUT">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Form.Item label="">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="VD">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
              </Row>
            </Card>

          </Col>

          <Col span={12}>
            <Card>
              {/* Right Card */}
              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Total Assembly - Third-Party Prod."> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Operation Normality"> </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox checked="true" />
                </Col>

              </Row>
              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Premature Stop - Client Origin"> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Refractory Normality"> </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox checked="true" />
                </Col>

              </Row>

              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Negotiation."> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Accident">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

              </Row>


            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <Form.Item label="Comment:"> </Form.Item>
          </Col>
        </Row>
      </Card>


      <Card style={{ marginTop: 10 }}>
        <Form>
          <Row gutter={16}>
            <Col span={2}>
              <Form.Item label="Campaign">
                <Input placeholder="4" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Start Date">
                <Input placeholder="02/06/2010" />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="End Date">
                <Input placeholder="00/00/0000" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label="Heat Nº">
                <Input placeholder="" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Steel Calc.Qty.">
                <Input placeholder=",000" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Steel Act.Qty.">
                <Input placeholder=",000" style={{ textAlign: 'right' }} />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label="Specif.Cons.">
                <Input placeholder="" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item label="Status">
                <Input placeholder="Programada" style={{ textAlign: 'center' }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Row gutter={16}>
          <Col span={12}>
            <Card>
              {/* Left Card */}
              <Row>
                <Col span={4}>
                  <Form.Item label="Heat Qty.">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="Oven Pot">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="RH">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col>

                </Col>

              </Row>
              <Row>
                <Col span={4}>
                  <Form.Item label="">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="AHF">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="IRUT">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Form.Item label="">
                  </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Form.Item label="VD">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: 5 }}>
                  <Input placeholder="" />
                </Col>
              </Row>
            </Card>

          </Col>

          <Col span={12}>
            <Card>
              {/* Right Card */}
              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Total Assembly - Third-Party Prod."> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Operation Normality"> </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox checked="true" />
                </Col>

              </Row>
              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Premature Stop - Client Origin"> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Refractory Normality"> </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox checked="true" />
                </Col>

              </Row>

              <Row gutter={16} style={{ marginTop: 0 }}>
                <Col span={11}>
                  <Form.Item label="Negotiation."> </Form.Item>
                </Col>
                <Col span={4} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

                <Col span={7}>
                  <Form.Item label="Accident">
                  </Form.Item>
                </Col>
                <Col span={2} style={{ textAlign: 'center', marginTop: 10 }}>
                  <Checkbox />
                </Col>

              </Row>


            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <Form.Item label="Comment:"> </Form.Item>
          </Col>
        </Row>
      </Card>
    </Card>
  )
};

export default () => {
  return (
    <Layout>
      <Layout>
        <Campaign />
      </Layout>
    </Layout>
  );
};
