# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 1.07s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.07s
[2025-06-22 00:44](#error-2025-06-22t0044140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eeeaf7a0954e84ad968/limits | qa | flaky_500 | 33.02s
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898356291349dce6c6fa/limits | qa | flaky_500 | 241.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 3 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 3 minutes
- 2025-04-16
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-04-17 PASS 3 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 3 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 3 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 3 minutes
- 2025-04-25 PASS 3 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS 4 minutes
- 2025-04-29 PASS 3 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-02 PASS 3 minutes
- 2025-05-03 PASS 3 minutes
- 2025-05-04 PASS 3 minutes
- 2025-05-05 PASS 3 minutes
- 2025-05-06 PASS 3 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 3 minutes
- 2025-05-09 PASS 4 minutes
- 2025-05-10 PASS 3 minutes
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8844366Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-05-11T00:29:57.8848354Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-05-11T00:29:57.8858103Z   
2025-05-11T00:29:57.8910309Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-05-11T00:29:57.8910954Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8911431Z         
2025-05-11T00:29:57.8911889Z         Error: error creating project: test-acc-tf-p-3340990956886639897
2025-05-11T00:29:57.8912284Z         
2025-05-11T00:29:57.8912627Z           with mongodbatlas_project.test,
2025-05-11T00:29:57.8913253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:57.8913859Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:57.8914200Z         
2025-05-11T00:29:57.8914703Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8915143Z         type
2025-05-11T00:29:57.8915998Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (1.71s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-14 PASS 4 minutes
- 2025-05-15 PASS 3 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 3 minutes
- 2025-05-18 PASS 3 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 3 minutes
- 2025-05-21 PASS 3 minutes
- 2025-05-22 PASS 3 minutes
- 2025-05-23 PASS 3 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 3 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 3 minutes
- 2025-06-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-03 PASS 3 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2607551Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-05T00:54:09.2610434Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-05T00:54:09.2671089Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-05T00:54:09.2671732Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2672211Z         
2025-06-05T00:54:09.2672651Z         Error: error creating project: test-acc-tf-p-7160178340766494733
2025-06-05T00:54:09.2673028Z         
2025-06-05T00:54:09.2673354Z           with mongodbatlas_project.test,
2025-06-05T00:54:09.2673976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:54:09.2674547Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:54:09.2674865Z         
2025-06-05T00:54:09.2675351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2676147Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2676743Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2677216Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (4.66s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 3 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 3 minutes
- 2025-06-14 PASS 3 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 3 minutes
- 2025-06-17 PASS 4 minutes
- 2025-06-18 PASS 3 minutes
- 2025-06-19 PASS 3 minutes
- 2025-06-20 PASS 4 minutes
- 2025-06-21 PASS 3 minutes
- 2025-06-22

### Error 2025-06-22T00:44:14+00:00
```
2025-06-22T00:44:14.8955474Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8961111Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8978954Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-22T00:44:14.8979604Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:14.8980071Z         
2025-06-22T00:44:14.8980475Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8980830Z         
2025-06-22T00:44:14.8981146Z           with mongodbatlas_project.test,
2025-06-22T00:44:14.8981774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:14.8998098Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:14.8998562Z         
2025-06-22T00:44:14.8999053Z         error getting project (68574eeeaf7a0954e84ad968): error getting project's
2025-06-22T00:44:14.8999760Z         limits (68574eeeaf7a0954e84ad968):
2025-06-22T00:44:14.9000486Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeeaf7a0954e84ad968/limits
2025-06-22T00:44:14.9001195Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.9001800Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.9002230Z         BadRequestDetail: 
2025-06-22T00:44:14.9002622Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (33.20s)
```

- 2025-06-23 PASS 3 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8138171Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8142487Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8157926Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8158608Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8159105Z         
2025-06-29T00:44:25.8159505Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8159852Z         
2025-06-29T00:44:25.8160267Z           with mongodbatlas_project.test,
2025-06-29T00:44:25.8160862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:44:25.8161421Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:44:25.8161725Z         
2025-06-29T00:44:25.8162304Z         error getting project (6860898356291349dce6c6fa): error getting project's
2025-06-29T00:44:25.8162772Z         limits (6860898356291349dce6c6fa):
2025-06-29T00:44:25.8163342Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898356291349dce6c6fa/limits
2025-06-29T00:44:25.8164118Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8164732Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8165141Z         BadRequestDetail: 
2025-06-29T00:44:25.8195277Z    test_working_directory=/tmp/plugintest3760895779 test_name=TestMigNetworkPrivateLinkEndpoint_basic test_terraform_path=/home/runner/work/_temp/ed926ef8-ba6c-45b8-b680-dede15945ee1/terraform test_step_number=2
2025-06-29T00:44:25.8203846Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (241.74s)
```

- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 3 minutes