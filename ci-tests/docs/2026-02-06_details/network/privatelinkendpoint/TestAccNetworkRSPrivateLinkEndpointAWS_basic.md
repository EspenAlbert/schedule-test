# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:35](#error-2026-01-31t0135190000) |  | dev | timeout | 3606.08s
[2026-02-02 01:38](#error-2026-02-02t0138360000) |  | dev | timeout | 3604.09s
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143b3e3c7fce2317db9d5/privateEndpoint/endpointService | dev |  | 6.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 4 minutes
- 2026-01-10 PASS 4 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 minutes
- 2026-01-13 PASS 4 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 6 minutes
- 2026-01-16 PASS 4 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 4 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 4 minutes
- 2026-01-30 PASS 3 minutes
- 2026-01-31

### Error 2026-01-31T01:35:19+00:00
```
2026-01-31T01:35:19.3965759Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-31T01:35:19.3972050Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-31T01:35:19.3994670Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-31T01:35:19.3995249Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-01-31T01:35:19.3995813Z         
2026-01-31T01:35:19.3996921Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-01-31T01:35:19.3998400Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-01-31T01:35:19.3999078Z         
2026-01-31T01:35:19.3999462Z           with mongodbatlas_privatelink_endpoint.test,
2026-01-31T01:35:19.4000196Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-01-31T01:35:19.4000902Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-01-31T01:35:19.4001276Z         
2026-01-31T01:35:19.4016113Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T01:35:19.4016760Z         
2026-01-31T01:35:19.4017097Z         Error: error when destroying resource
2026-01-31T01:35:19.4017417Z         
2026-01-31T01:35:19.4017787Z         error deleting project (697d4e407d00588dcf9edb98):
2026-01-31T01:35:19.4018411Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e407d00588dcf9edb98
2026-01-31T01:35:19.4018955Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T01:35:19.4020320Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2026-01-31T01:35:19.4021072Z         close group while it has active private endpoint services; please terminate
2026-01-31T01:35:19.4022037Z         all private endpoint services. Reason: Conflict. Params: [],
2026-01-31T01:35:19.4022483Z         BadRequestDetail: 
2026-01-31T01:35:19.4022883Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (3606.79s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:38:36+00:00
```
2026-02-02T01:38:36.8764685Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-02T01:38:36.8770749Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-02T01:38:36.8774145Z   diagnostic_summary=
2026-02-02T01:38:36.8776749Z   
2026-02-02T01:38:36.8813519Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-02T01:38:36.8814424Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-02-02T01:38:36.8814861Z         
2026-02-02T01:38:36.8815997Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-02-02T01:38:36.8817681Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-02T01:38:36.8818376Z         
2026-02-02T01:38:36.8818764Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-02T01:38:36.8819507Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-02T01:38:36.8820220Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-02T01:38:36.8820589Z         
2026-02-02T01:38:36.8834347Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T01:38:36.8834838Z         
2026-02-02T01:38:36.8835167Z         Error: error when destroying resource
2026-02-02T01:38:36.8835477Z         
2026-02-02T01:38:36.8835854Z         error deleting project (697ff20871768356d7f7fe1f):
2026-02-02T01:38:36.8836479Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20871768356d7f7fe1f
2026-02-02T01:38:36.8837021Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T01:38:36.8837610Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2026-02-02T01:38:36.8838448Z         close group while it has active private endpoint services; please terminate
2026-02-02T01:38:36.8839077Z         all private endpoint services. Reason: Conflict. Params: [],
2026-02-02T01:38:36.8839510Z         BadRequestDetail: 
2026-02-02T01:38:36.8839899Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (3604.91s)
```

- 2026-02-03

### Error 2026-02-03T00:47:14+00:00
```
2026-02-03T00:47:14.7539634Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-03T00:47:14.7544462Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-03T00:47:14.7580219Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-02-03T00:47:14.7580775Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:47:14.7581176Z         
2026-02-03T00:47:14.7582997Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3e3c7fce2317db9d5/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-03T00:47:14.7584268Z         
2026-02-03T00:47:14.7584638Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-03T00:47:14.7585363Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-03T00:47:14.7586051Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-03T00:47:14.7586410Z         
2026-02-03T00:47:14.7586731Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (6.01s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
