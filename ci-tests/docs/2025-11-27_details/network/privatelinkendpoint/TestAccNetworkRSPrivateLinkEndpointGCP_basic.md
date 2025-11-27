# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1e34 | dev | flaky_500 | 708.04s
[2025-11-26 01:28](#error-2025-11-26t0128270000) |  | dev | timeout | 3604.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 minutes
- 2025-10-30

### Error 2025-10-30T00:39:52+00:00
```
2025-10-30T00:39:52.0771975Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0775800Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0827931Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0828600Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:39:52.0829090Z         
2025-10-30T00:39:52.0829426Z         Error: error when destroying resource
2025-10-30T00:39:52.0829894Z         
2025-10-30T00:39:52.0830278Z         error deleting project (6902b113e2dc7470847b1e34):
2025-10-30T00:39:52.0830883Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113e2dc7470847b1e34
2025-10-30T00:39:52.0831545Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:39:52.0832177Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:39:52.0832622Z         BadRequestDetail: 
2025-10-30T00:39:52.0833007Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (708.36s)
```

- 2025-10-31 PASS 12 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 9 minutes
- 2025-11-04 PASS 10 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 9 minutes
- 2025-11-06 PASS 11 minutes
- 2025-11-07 PASS 9 minutes
- 2025-11-08 PASS 9 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 9 minutes
- 2025-11-11 PASS 10 minutes
- 2025-11-12 PASS 10 minutes
- 2025-11-13 PASS 9 minutes
- 2025-11-14 PASS 9 minutes
- 2025-11-15 PASS 9 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 8 minutes
- 2025-11-18 PASS 8 minutes
- 2025-11-19 PASS 9 minutes
- 2025-11-20 PASS 11 minutes
- 2025-11-21 PASS 9 minutes
- 2025-11-22 PASS 10 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 8 minutes
- 2025-11-25 PASS 8 minutes
- 2025-11-26

### Error 2025-11-26T01:28:27+00:00
```
2025-11-26T01:28:27.3842201Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-11-26T01:28:27.3848800Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-11-26T01:28:27.3872980Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-11-26T01:28:27.3873529Z     resource_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-11-26T01:28:27.3873924Z         
2025-11-26T01:28:27.3874978Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-11-26T01:28:27.3876339Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-26T01:28:27.3876947Z         
2025-11-26T01:28:27.3877320Z           with mongodbatlas_privatelink_endpoint.test,
2025-11-26T01:28:27.3878014Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-11-26T01:28:27.3878851Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-11-26T01:28:27.3879194Z         
2025-11-26T01:28:27.3895222Z    test_terraform_path=/home/runner/work/_temp/1274a637-9bc7-40a7-b974-329df507a63e/terraform test_step_number=1
2025-11-26T01:28:27.3896029Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-26T01:28:27.3896493Z         
2025-11-26T01:28:27.3896819Z         Error: error when destroying resource
2025-11-26T01:28:27.3897128Z         
2025-11-26T01:28:27.3897483Z         error deleting project (692649a7131e634a70c56242):
2025-11-26T01:28:27.3898090Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/692649a7131e634a70c56242
2025-11-26T01:28:27.3898859Z         DELETE: HTTP 409 Conflict (Error code:
2025-11-26T01:28:27.3899419Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-11-26T01:28:27.3900099Z         close group while it has active private endpoint services; please terminate
2025-11-26T01:28:27.3900709Z         all private endpoint services. Reason: Conflict. Params: [],
2025-11-26T01:28:27.3901128Z         BadRequestDetail: 
2025-11-26T01:28:27.3901517Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3604.44s)
```

- 2025-11-27 PASS 12 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - PASS 9 minutes
  - PASS 9 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 8 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 7 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
