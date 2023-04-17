import { Col, Grid, Title } from "@tremor/react";
import { Outlet } from "react-router-dom";
import CartCard from "./CartCard";
import { CouponList } from "./CouponList";
import { graphql } from "../gql";
import { useQuery } from "urql";

const cartQuery = graphql(
  `
    query CartQuery {
      cart(id: "2") {
        id
        items {
          id
          name
        }
        totalItems
        subtotal {
          amount
          formatted
        }
      }
    }
  `
);

export default function Layout() {
  const [{ data }] = useQuery({ query: cartQuery });
  console.log(data);

  return (
    <main className="px-4">
      <Title className="text-3xl text-center">Versatile Shopping cart</Title>

      <Grid numColsLg={6} className="gap-6 mt-6">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Outlet />
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2} className="space-y-12">
          <CartCard />
          <CouponList />
        </Col>
      </Grid>
    </main>
  );
}
