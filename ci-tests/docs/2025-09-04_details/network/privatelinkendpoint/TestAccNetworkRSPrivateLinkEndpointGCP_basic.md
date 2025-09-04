# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-30 01:26](#error-2025-08-30t0126050000) |  | dev | 3605.01s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.05s
[2025-09-01 09:06](#error-2025-09-01t0906060000) |  | dev | 4128.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 minutes
- 2025-08-07 PASS 9 minutes
- 2025-08-08 PASS 10 minutes
- 2025-08-09 PASS 8 minutes
- 2025-08-10 PASS 18 minutes
- 2025-08-11 PASS 37 minutes
- 2025-08-12 PASS 11 minutes
- 2025-08-13 PASS 10 minutes
- 2025-08-14 PASS 12 minutes
- 2025-08-15 PASS 9 minutes
- 2025-08-16 PASS 39 minutes
- 2025-08-17 PASS 8 minutes
- 2025-08-18 PASS 11 minutes
- 2025-08-19 PASS 8 minutes
- 2025-08-20
  - PASS 10 minutes
  - PASS 9 minutes
- 2025-08-21 PASS 9 minutes
- 2025-08-22 PASS 9 minutes
- 2025-08-23 PASS 11 minutes
- 2025-08-24 PASS 8 minutes
- 2025-08-25 PASS 16 minutes
- 2025-08-26 PASS 15 minutes
- 2025-08-27 PASS 22 minutes
- 2025-08-28 PASS 9 minutes
- 2025-08-29 PASS 9 minutes
- 2025-08-30

### Error 2025-08-30T01:26:05+00:00
```
2025-08-30T01:26:05.5161040Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-08-30T01:26:05.5164807Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-08-30T01:26:05.5181757Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-08-30T01:26:05.5185092Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-08-30T01:26:05.5186211Z         
2025-08-30T01:26:05.5187225Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-08-30T01:26:05.5188012Z         
2025-08-30T01:26:05.5188634Z           with mongodbatlas_privatelink_endpoint.test,
2025-08-30T01:26:05.5189849Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-08-30T01:26:05.5190736Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-08-30T01:26:05.5191344Z         
2025-08-30T01:26:05.5211303Z    test_step_number=1
2025-08-30T01:26:05.5212416Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T01:26:05.5213192Z         
2025-08-30T01:26:05.5213876Z         Error: error when destroying resource
2025-08-30T01:26:05.5214381Z         
2025-08-30T01:26:05.5214992Z         error deleting project (68b2451987c22161ee8e07ad):
2025-08-30T01:26:05.5215736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2451987c22161ee8e07ad
2025-08-30T01:26:05.5216623Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T01:26:05.5217578Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-08-30T01:26:05.5218725Z         close group while it has active private endpoint services; please terminate
2025-08-30T01:26:05.5219755Z         all private endpoint services. Reason: Conflict. Params: [],
2025-08-30T01:26:05.5220300Z         BadRequestDetail: 
2025-08-30T01:26:05.5220846Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3605.05s)
```

- 2025-08-31 PASS 8 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5828621Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T00:42:46.5830726Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T00:42:46.5842329Z    test_terraform_path=/home/runner/work/_temp/e0a167fc-3e3b-4118-9703-b8972b6cca0a/terraform test_step_number=1 test_working_directory=/tmp/plugintest933779269 test_name=TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-01T00:42:46.5862896Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T00:42:46.5863521Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5863966Z         
2025-09-01T00:42:46.5864393Z         Error: error creating project: test-acc-tf-p-3253677713455905962
2025-09-01T00:42:46.5864758Z         
2025-09-01T00:42:46.5865086Z           with mongodbatlas_project.test,
2025-09-01T00:42:46.5865692Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:42:46.5866257Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:42:46.5866564Z         
2025-09-01T00:42:46.5867194Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5867857Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5868496Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5869122Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5869542Z         BadRequestDetail: 
2025-09-01T00:42:46.5881932Z    test_step_number=1
2025-09-01T00:42:46.5889718Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (1.48s)
```

  - PASS 14 minutes
  - FAIL an hour

### Error 2025-09-01T09:06:06+00:00
```
2025-09-01T09:06:06.7397172Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T09:06:06.7402203Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T09:06:06.7422507Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-01T09:06:06.7423945Z     resource_privatelink_endpoint_test.go:94: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T09:06:06.7424970Z         
2025-09-01T09:06:06.7426235Z         Error: error deleting MongoDB Private Endpoints Connection(68b551e37af6b0372e9a7b8b): context deadline exceeded
2025-09-01T09:06:06.7427536Z         
2025-09-01T09:06:06.7428303Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (4128.00s)
```

  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 9 minutes
  - PASS 12 minutes
- 2025-09-02 PASS 9 minutes
- 2025-09-03 PASS 9 minutes
- 2025-09-04 PASS 9 minutes