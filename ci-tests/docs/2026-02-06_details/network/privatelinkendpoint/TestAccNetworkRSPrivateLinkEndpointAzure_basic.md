# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:44](#error-2026-01-29t0044530000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/697aab89364effe4d2b9fd5c/privateEndpoint/endpointService | dev |  | 5.08s
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143b3b2e54ee9959003ef/privateEndpoint/endpointService | dev |  | 7.10s
[2026-02-04 01:37](#error-2026-02-04t0137440000) |  | dev | timeout | 3606.09s
[2026-02-05 00:48](#error-2026-02-05t0048260000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6983e697b0f8d5bab818c70e/privateEndpoint/endpointService | dev |  | 5.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09 PASS a minute
- 2026-01-10 PASS 2 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS a minute
- 2026-01-13 PASS a minute
- 2026-01-14 PASS a minute
- 2026-01-15 PASS 2 minutes
- 2026-01-16 PASS a minute
- 2026-01-17 PASS a minute
- 2026-01-18: MISSING
- 2026-01-19 PASS a minute
- 2026-01-20 PASS a minute
- 2026-01-21 PASS a minute
- 2026-01-22 PASS 2 minutes
- 2026-01-23 PASS a minute
- 2026-01-24 PASS 2 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS a minute
- 2026-01-27 PASS a minute
- 2026-01-28 PASS a minute
- 2026-01-29

### Error 2026-01-29T00:44:53+00:00
```
2026-01-29T00:44:53.7353164Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-01-29T00:44:53.7358456Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-01-29T00:44:53.7360615Z   diagnostic_summary=
2026-01-29T00:44:53.7363807Z    diagnostic_detail="" tf_req_id=88b34f56-08e7-2872-4ec6-c23aa4054e05 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2026-01-29T00:44:53.7378294Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-01-29T00:44:53.7378881Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2026-01-29T00:44:53.7379305Z         
2026-01-29T00:44:53.7381349Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab89364effe4d2b9fd5c/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-01-29T00:44:53.7382680Z         
2026-01-29T00:44:53.7383074Z           with mongodbatlas_privatelink_endpoint.test,
2026-01-29T00:44:53.7383825Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-01-29T00:44:53.7384543Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-01-29T00:44:53.7384924Z         
2026-01-29T00:44:53.7385265Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (5.79s)
```

- 2026-01-30 PASS a minute
- 2026-01-31 PASS a minute
- 2026-02-01: MISSING
- 2026-02-02 PASS a minute
- 2026-02-03

### Error 2026-02-03T00:47:14+00:00
```
2026-02-03T00:47:14.7540637Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-03T00:47:14.7545624Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-03T00:47:14.7599856Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-03T00:47:14.7600533Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:47:14.7600931Z         
2026-02-03T00:47:14.7602740Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3b2e54ee9959003ef/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-03T00:47:14.7604008Z         
2026-02-03T00:47:14.7604385Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-03T00:47:14.7605114Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-03T00:47:14.7605806Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-03T00:47:14.7606156Z         
2026-02-03T00:47:14.7606482Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (7.99s)
```

- 2026-02-04

### Error 2026-02-04T01:37:44+00:00
```
2026-02-04T01:37:44.2673378Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-04T01:37:44.2677741Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-04T01:37:44.2701094Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-04T01:37:44.2701696Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2026-02-04T01:37:44.2702129Z         
2026-02-04T01:37:44.2703275Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-02-04T01:37:44.2704805Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-04T01:37:44.2705513Z         
2026-02-04T01:37:44.2705926Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-04T01:37:44.2706688Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-04T01:37:44.2707417Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-04T01:37:44.2707804Z         
2026-02-04T01:37:44.2727545Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-04T01:37:44.2728450Z         
2026-02-04T01:37:44.2729054Z         Error: error when destroying resource
2026-02-04T01:37:44.2729814Z         
2026-02-04T01:37:44.2730513Z         error deleting project (6982945709271d271f2f190e):
2026-02-04T01:37:44.2731668Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945709271d271f2f190e
2026-02-04T01:37:44.2732673Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-04T01:37:44.2733772Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2026-02-04T01:37:44.2735118Z         close group while it has active private endpoint services; please terminate
2026-02-04T01:37:44.2736323Z         all private endpoint services. Reason: Conflict. Params: [],
2026-02-04T01:37:44.2737126Z         BadRequestDetail: 
2026-02-04T01:37:44.2737851Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (3606.91s)
```

- 2026-02-05

### Error 2026-02-05T00:48:26+00:00
```
2026-02-05T00:48:26.0891763Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-05T00:48:26.0897043Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-05T00:48:26.0898332Z   diagnostic_summary=
2026-02-05T00:48:26.0901631Z    diagnostic_detail="" diagnostic_severity=ERROR tf_req_id=e1f60398-ffd2-031e-d120-a2d168b4631b tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange
2026-02-05T00:48:26.0915954Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2026-02-05T00:48:26.0916540Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2026-02-05T00:48:26.0916961Z         
2026-02-05T00:48:26.0918740Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e697b0f8d5bab818c70e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-05T00:48:26.0919954Z         
2026-02-05T00:48:26.0920345Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-05T00:48:26.0921084Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-05T00:48:26.0921778Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-05T00:48:26.0922142Z         
2026-02-05T00:48:26.0922491Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (5.11s)
```

- 2026-02-06 PASS a minute

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a minute
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a minute
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a minute
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS a minute
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS a minute
- 2026-02-05: MISSING
- 2026-02-06: MISSING
