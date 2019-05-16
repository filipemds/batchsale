import React from 'react';
import { Layout, Card, Input, Form, Row, Col } from 'antd';

const BatchSale = () => {
  return (
    <Card>
      <Card title="Sistema de Venda de lotes">
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
      </Card>
    </Card>
  )
};

export default () => {
  return (
    <Layout>
      <Layout>
        <BatchSale />
      </Layout>
    </Layout>
  );
};
