# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | timeout | 3604.04s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3605.00s
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1c31 | dev | flaky_500 | 209.06s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6769144Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-04T01:28:00.6779332Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-04T01:28:00.6782077Z   diagnostic_summary=
2025-10-04T01:28:00.6785331Z    tf_proto_version=6.10 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=d8a456ce-33b4-b97a-8c00-e6c23e95e10f
2025-10-04T01:28:00.6801845Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-04T01:28:00.6802412Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-04T01:28:00.6802812Z         
2025-10-04T01:28:00.6803871Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:28:00.6805411Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:28:00.6806034Z         
2025-10-04T01:28:00.6806410Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-04T01:28:00.6807105Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-04T01:28:00.6807759Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-04T01:28:00.6808100Z         
2025-10-04T01:28:00.6820080Z    test_step_number=1 test_name=TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-04T01:28:00.6820770Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-04T01:28:00.6821230Z         
2025-10-04T01:28:00.6821549Z         Error: error when destroying resource
2025-10-04T01:28:00.6821839Z         
2025-10-04T01:28:00.6822200Z         error deleting project (68e069917ed8eb23693b0567):
2025-10-04T01:28:00.6822804Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e069917ed8eb23693b0567
2025-10-04T01:28:00.6823329Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-04T01:28:00.6823886Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-10-04T01:28:00.6824544Z         close group while it has active private endpoint services; please terminate
2025-10-04T01:28:00.6825134Z         all private endpoint services. Reason: Conflict. Params: [],
2025-10-04T01:28:00.6825541Z         BadRequestDetail: 
2025-10-04T01:28:00.6825918Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (3604.44s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4465780Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-07T01:29:37.4471871Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-07T01:29:37.4474760Z   diagnostic_summary=
2025-10-07T01:29:37.4477134Z   
2025-10-07T01:29:37.4491138Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-07T01:29:37.4491671Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-07T01:29:37.4492060Z         
2025-10-07T01:29:37.4493241Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:29:37.4494856Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:29:37.4495679Z         
2025-10-07T01:29:37.4496059Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-07T01:29:37.4496758Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-07T01:29:37.4497406Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-07T01:29:37.4497751Z         
2025-10-07T01:29:37.4509069Z    test_name=TestAccNetworkRSPrivateLinkEndpointAWS_basic test_terraform_path=/home/runner/work/_temp/187a667b-17d2-49d5-9d3f-e7b7bdd600ad/terraform test_working_directory=/tmp/plugintest2064830792 test_step_number=1
2025-10-07T01:29:37.4510245Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-07T01:29:37.4510703Z         
2025-10-07T01:29:37.4511027Z         Error: error when destroying resource
2025-10-07T01:29:37.4511326Z         
2025-10-07T01:29:37.4511689Z         error deleting project (68e45e71507f48738a07fd1b):
2025-10-07T01:29:37.4512288Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e71507f48738a07fd1b
2025-10-07T01:29:37.4512801Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-07T01:29:37.4513356Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-10-07T01:29:37.4514016Z         close group while it has active private endpoint services; please terminate
2025-10-07T01:29:37.4514855Z         all private endpoint services. Reason: Conflict. Params: [],
2025-10-07T01:29:37.4515269Z         BadRequestDetail: 
2025-10-07T01:29:37.4515645Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (3605.00s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS 6 minutes
- 2025-10-11 PASS 4 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 7 minutes
- 2025-10-17 PASS 4 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 3 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 4 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 3 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30

### Error 2025-10-30T00:39:52+00:00
```
2025-10-30T00:39:52.0769134Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0775232Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0811400Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0812074Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:39:52.0812567Z         
2025-10-30T00:39:52.0812898Z         Error: error when destroying resource
2025-10-30T00:39:52.0813214Z         
2025-10-30T00:39:52.0813599Z         error deleting project (6902b113e2dc7470847b1c31):
2025-10-30T00:39:52.0814215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113e2dc7470847b1c31
2025-10-30T00:39:52.0815133Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:39:52.0815793Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:39:52.0816237Z         BadRequestDetail: 
2025-10-30T00:39:52.0816626Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (209.61s)
```

- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03 PASS 4 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06 PASS 3 minutes
- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09 PASS 3 minutes
- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 3 minutes
- 2025-11-12 PASS 3 minutes