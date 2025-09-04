# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-31 00:42](#error-2025-08-31t0042070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397787e07f9709daeaa90/limits | qa | flaky_500 | 231.07s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 minutes
- 2025-08-07 PASS 5 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 4 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12 PASS 4 minutes
- 2025-08-13 PASS 5 minutes
- 2025-08-14 PASS 4 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 4 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 4 minutes
- 2025-08-24 PASS 3 minutes
- 2025-08-25 PASS 4 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 4 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31

### Error 2025-08-31T00:42:07+00:00
```
2025-08-31T00:42:07.1224641Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-08-31T00:42:07.1227997Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-08-31T00:42:07.1242615Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-08-31T00:42:07.1243317Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:42:07.1243818Z         
2025-08-31T00:42:07.1244215Z         Error: error when getting project properties after create
2025-08-31T00:42:07.1244559Z         
2025-08-31T00:42:07.1244878Z           with mongodbatlas_project.test,
2025-08-31T00:42:07.1245489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:42:07.1246058Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:42:07.1246367Z         
2025-08-31T00:42:07.1246823Z         error getting project (68b397787e07f9709daeaa90): error getting project's
2025-08-31T00:42:07.1247291Z         limits (68b397787e07f9709daeaa90):
2025-08-31T00:42:07.1247874Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397787e07f9709daeaa90/limits
2025-08-31T00:42:07.1248560Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:42:07.1249156Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:42:07.1249572Z         BadRequestDetail: 
2025-08-31T00:42:07.1257830Z   
2025-08-31T00:42:07.1265818Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (231.73s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5826722Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-01T00:42:46.5830202Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-01T00:42:46.5843280Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-01T00:42:46.5843898Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5844352Z         
2025-09-01T00:42:46.5844786Z         Error: error creating project: test-acc-tf-p-5231997701783075151
2025-09-01T00:42:46.5845153Z         
2025-09-01T00:42:46.5845465Z           with mongodbatlas_project.test,
2025-09-01T00:42:46.5846079Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:42:46.5846770Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:42:46.5847213Z         
2025-09-01T00:42:46.5847718Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5848412Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5849062Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5849688Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5850120Z         BadRequestDetail: 
2025-09-01T00:42:46.5862613Z   
2025-09-01T00:42:46.5889250Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (1.45s)
```

  - PASS 6 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 4 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes