# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4047267b5775b682bff/limits | qa | flaky_500 | 34.04s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafafd583001f9eeb0c8/limits | qa | flaky_500 | 32.10s
[2025-07-14 01:31](#error-2025-07-14t0131130000) |  | dev |  | 3605.08s
[2025-07-27 00:46](#error-2025-07-27t0046040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d4ef1f7377717a856c/limits | qa | flaky_500 | 33.01s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS a minute
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6458706Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6460720Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6475201Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6475858Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:44:46.6476460Z         
2025-07-06T00:44:46.6476870Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6477217Z         
2025-07-06T00:44:46.6477528Z           with mongodbatlas_project.test,
2025-07-06T00:44:46.6478141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:44:46.6478704Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:44:46.6479024Z         
2025-07-06T00:44:46.6479503Z         error getting project (6869c4047267b5775b682bff): error getting project's
2025-07-06T00:44:46.6479969Z         limits (6869c4047267b5775b682bff):
2025-07-06T00:44:46.6480556Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4047267b5775b682bff/limits
2025-07-06T00:44:46.6481394Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6481991Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6482400Z         BadRequestDetail: 
2025-07-06T00:44:46.6482780Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (34.37s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL 32 seconds

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8608802Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-10T13:19:33.8611073Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-10T13:19:33.8625192Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-10T13:19:33.8625817Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:19:33.8626256Z         
2025-07-10T13:19:33.8626657Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8627002Z         
2025-07-10T13:19:33.8627314Z           with mongodbatlas_project.test,
2025-07-10T13:19:33.8627925Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:19:33.8628487Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:19:33.8628799Z         
2025-07-10T13:19:33.8629258Z         error getting project (686fbafafd583001f9eeb0c8): error getting project's
2025-07-10T13:19:33.8629735Z         limits (686fbafafd583001f9eeb0c8):
2025-07-10T13:19:33.8630324Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafafd583001f9eeb0c8/limits
2025-07-10T13:19:33.8631111Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8631702Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8632109Z         BadRequestDetail: 
2025-07-10T13:19:33.8632598Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (32.97s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS 2 minutes
- 2025-07-14

### Error 2025-07-14T01:31:13+00:00
```
2025-07-14T01:31:13.1090864Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-14T01:31:13.1093215Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-14T01:31:13.1173686Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-14T01:31:13.1174355Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:31:13.1174819Z         
2025-07-14T01:31:13.1175364Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-14T01:31:13.1175803Z         
2025-07-14T01:31:13.1176187Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-14T01:31:13.1176898Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-14T01:31:13.1177562Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-14T01:31:13.1177915Z         
2025-07-14T01:31:13.1189767Z    test_name=TestAccNetworkRSPrivateLinkEndpointAzure_basic test_terraform_path=/home/runner/work/_temp/09a620f3-47b8-4e09-ab1e-137e3244237e/terraform test_working_directory=/tmp/plugintest171116897
2025-07-14T01:31:13.1190873Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:31:13.1191335Z         
2025-07-14T01:31:13.1191650Z         Error: error when destroying resource
2025-07-14T01:31:13.1191949Z         
2025-07-14T01:31:13.1192310Z         error deleting project (68744fc852cba864e5f0ff5a):
2025-07-14T01:31:13.1193082Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc852cba864e5f0ff5a
2025-07-14T01:31:13.1193593Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T01:31:13.1194146Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-14T01:31:13.1194800Z         close group while it has active private endpoint services; please terminate
2025-07-14T01:31:13.1195392Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-14T01:31:13.1195799Z         BadRequestDetail: 
2025-07-14T01:31:13.1196185Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (3605.79s)
```

- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS a minute
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS 2 minutes
  - PASS a minute
  - PASS 2 minutes
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27

### Error 2025-07-27T00:46:04+00:00
```
2025-07-27T00:46:04.5555961Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-27T00:46:04.5557977Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-27T00:46:04.5571951Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-27T00:46:04.5572897Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:46:04.5573338Z         
2025-07-27T00:46:04.5573730Z         Error: error when getting project properties after create
2025-07-27T00:46:04.5574070Z         
2025-07-27T00:46:04.5574379Z           with mongodbatlas_project.test,
2025-07-27T00:46:04.5574977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:46:04.5575529Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:46:04.5575832Z         
2025-07-27T00:46:04.5576286Z         error getting project (688573d4ef1f7377717a856c): error getting project's
2025-07-27T00:46:04.5576751Z         limits (688573d4ef1f7377717a856c):
2025-07-27T00:46:04.5577333Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d4ef1f7377717a856c/limits
2025-07-27T00:46:04.5578007Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:46:04.5578598Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:46:04.5579001Z         BadRequestDetail: 
2025-07-27T00:46:04.5579365Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (33.11s)
```

- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute