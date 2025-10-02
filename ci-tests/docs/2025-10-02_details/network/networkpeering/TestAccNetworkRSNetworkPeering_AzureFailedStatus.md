# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 6)
Success rate: 86.05%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1db8704811492b54703/limits | qa | flaky_500 | 218.03s
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a7341d8a4987761ee7/limits | qa | flaky_500 | 238.08s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c411411d835e95b32b5/limits | qa | flaky_500 | 36.01s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03ed444485797b5c7ea/limits | qa | flaky_500 | 35.01s
[2025-09-30 07:54](#error-2025-09-30t0754340000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68db89c4bb7b8c0d70349316/peers | qa |  | 130.07s
[2025-09-30 15:19](#error-2025-09-30t1519070000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68dbf1f5ce185e38b70f059f/peers | qa |  | 127.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 minutes
- 2025-09-04 PASS 3 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 8 minutes
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8246640Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-07T00:41:46.8252698Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-07T00:41:46.8317603Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-07T00:41:46.8318961Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-07T00:41:46.8319965Z         
2025-09-07T00:41:46.8320687Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8321301Z         
2025-09-07T00:41:46.8321853Z           with mongodbatlas_project.first,
2025-09-07T00:41:46.8322960Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-09-07T00:41:46.8323969Z           13: 		resource "mongodbatlas_project" "first" {
2025-09-07T00:41:46.8324517Z         
2025-09-07T00:41:46.8325341Z         error getting project (68bcd1db8704811492b54703): error getting project's
2025-09-07T00:41:46.8326187Z         limits (68bcd1db8704811492b54703):
2025-09-07T00:41:46.8327404Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1db8704811492b54703/limits
2025-09-07T00:41:46.8328658Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8329732Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8330508Z         BadRequestDetail: 
2025-09-07T00:41:46.8343731Z    test_name=TestMigNetworkNetworkPeering_basicAWS test_terraform_path=/home/runner/work/_temp/1d1aff74-e7bf-43f0-9434-1c4bae418332/terraform test_working_directory=/tmp/plugintest3158301595 test_step_number=1
2025-09-07T00:41:46.8398002Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (218.27s)
```

- 2025-09-08
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9820677Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-08T09:46:17.9824531Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-08T09:46:17.9880349Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-08T09:46:17.9881123Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-08T09:46:17.9881785Z         
2025-09-08T09:46:17.9882196Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9882556Z         
2025-09-08T09:46:17.9882889Z           with mongodbatlas_project.second,
2025-09-08T09:46:17.9883537Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-09-08T09:46:17.9884129Z           36: 		resource "mongodbatlas_project" "second" {
2025-09-08T09:46:17.9884447Z         
2025-09-08T09:46:17.9884925Z         error getting project (68bea2a7341d8a4987761ee7): error getting project's
2025-09-08T09:46:17.9885600Z         limits (68bea2a7341d8a4987761ee7):
2025-09-08T09:46:17.9886211Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a7341d8a4987761ee7/limits
2025-09-08T09:46:17.9886903Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9887519Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9887948Z         BadRequestDetail: 
2025-09-08T09:46:17.9888893Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (238.81s)
```

  - PASS 3 minutes
- 2025-09-09 PASS 3 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 8 minutes
- 2025-09-12 PASS 3 minutes
- 2025-09-13 PASS 3 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6331331Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-14T00:41:24.6338492Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-14T00:41:24.6500872Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-14T00:41:24.6502128Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-14T00:41:24.6502987Z         
2025-09-14T00:41:24.6503906Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6504537Z         
2025-09-14T00:41:24.6505099Z           with mongodbatlas_project.first,
2025-09-14T00:41:24.6506228Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-09-14T00:41:24.6507256Z           13: 		resource "mongodbatlas_project" "first" {
2025-09-14T00:41:24.6507798Z         
2025-09-14T00:41:24.6508648Z         error getting project (68c60c411411d835e95b32b5): error getting project's
2025-09-14T00:41:24.6509509Z         limits (68c60c411411d835e95b32b5):
2025-09-14T00:41:24.6510586Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c411411d835e95b32b5/limits
2025-09-14T00:41:24.6511833Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6512929Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6513828Z         BadRequestDetail: 
2025-09-14T00:41:24.6514689Z         
2025-09-14T00:41:24.6515601Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6516207Z         
2025-09-14T00:41:24.6516779Z           with mongodbatlas_project.second,
2025-09-14T00:41:24.6517920Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-09-14T00:41:24.6518969Z           36: 		resource "mongodbatlas_project" "second" {
2025-09-14T00:41:24.6519521Z         
2025-09-14T00:41:24.6520354Z         error getting project (68c60c41d444485797b21168): error getting project's
2025-09-14T00:41:24.6521186Z         limits (68c60c41d444485797b21168):
2025-09-14T00:41:24.6522256Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c41d444485797b21168/limits
2025-09-14T00:41:24.6524010Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6524799Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6525296Z         BadRequestDetail: 
2025-09-14T00:41:24.6525740Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (36.05s)
```

- 2025-09-15
  - PASS 4 minutes
  - FAIL 35 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3132797Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-15T06:33:08.3137413Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-15T06:33:08.3229490Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-15T06:33:08.3230177Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-15T06:33:08.3230654Z         
2025-09-15T06:33:08.3231051Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3231388Z         
2025-09-15T06:33:08.3231706Z           with mongodbatlas_project.first,
2025-09-15T06:33:08.3232318Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-09-15T06:33:08.3232879Z           13: 		resource "mongodbatlas_project" "first" {
2025-09-15T06:33:08.3233184Z         
2025-09-15T06:33:08.3233643Z         error getting project (68c7b03ed444485797b5c7ea): error getting project's
2025-09-15T06:33:08.3234105Z         limits (68c7b03ed444485797b5c7ea):
2025-09-15T06:33:08.3234691Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03ed444485797b5c7ea/limits
2025-09-15T06:33:08.3235368Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3236085Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3236491Z         BadRequestDetail: 
2025-09-15T06:33:08.3236741Z         
2025-09-15T06:33:08.3237128Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3237459Z         
2025-09-15T06:33:08.3237776Z           with mongodbatlas_project.second,
2025-09-15T06:33:08.3238609Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-09-15T06:33:08.3239331Z           36: 		resource "mongodbatlas_project" "second" {
2025-09-15T06:33:08.3239642Z         
2025-09-15T06:33:08.3240108Z         error getting project (68c7b03efe60767b7f9af6e5): error getting project's
2025-09-15T06:33:08.3240584Z         limits (68c7b03efe60767b7f9af6e5):
2025-09-15T06:33:08.3241165Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af6e5/limits
2025-09-15T06:33:08.3241843Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3242441Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3242841Z         BadRequestDetail: 
2025-09-15T06:33:08.3243214Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (35.10s)
```

- 2025-09-16 PASS 3 minutes
- 2025-09-17 PASS 3 minutes
- 2025-09-18 PASS 3 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 3 minutes
- 2025-09-22 PASS 3 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 3 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - FAIL 2 minutes

### Error 2025-09-30T07:54:34+00:00
```
2025-09-30T07:54:34.9641249Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T07:54:34.9646654Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T07:54:34.9690623Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T07:54:34.9691317Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T07:54:34.9691802Z         
2025-09-30T07:54:34.9693506Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89c4bb7b8c0d70349316/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T07:54:34.9694675Z         
2025-09-30T07:54:34.9695050Z           with mongodbatlas_network_peering.first,
2025-09-30T07:54:34.9695715Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-09-30T07:54:34.9696336Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-09-30T07:54:34.9696773Z         
2025-09-30T07:54:34.9698661Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89c461a8db665954fe80/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T07:54:34.9699825Z         
2025-09-30T07:54:34.9700170Z           with mongodbatlas_network_peering.second,
2025-09-30T07:54:34.9700840Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-09-30T07:54:34.9701471Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-09-30T07:54:34.9701798Z         
2025-09-30T07:54:34.9702659Z   diagnostic_summary=
2025-09-30T07:54:34.9706173Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_network_peering tf_req_id=f9929164-e316-6c47-bbe6-51fa9ef12bb1 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.9 diagnostic_detail="" diagnostic_severity=ERROR
2025-09-30T07:54:34.9707809Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (130.66s)
```

  - PASS 3 minutes
  - FAIL 2 minutes

### Error 2025-09-30T15:19:07+00:00
```
2025-09-30T15:19:07.7382850Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T15:19:07.7387952Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T15:19:07.7432204Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-30T15:19:07.7433240Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T15:19:07.7433728Z         
2025-09-30T15:19:07.7435496Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf1f5ce185e38b70f059f/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T15:19:07.7436669Z         
2025-09-30T15:19:07.7437009Z           with mongodbatlas_network_peering.first,
2025-09-30T15:19:07.7437660Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-09-30T15:19:07.7438259Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-09-30T15:19:07.7438727Z         
2025-09-30T15:19:07.7440584Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf1f5a072243c859d2de6/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T15:19:07.7441760Z         
2025-09-30T15:19:07.7442096Z           with mongodbatlas_network_peering.second,
2025-09-30T15:19:07.7442752Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-09-30T15:19:07.7443359Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-09-30T15:19:07.7443684Z         
2025-09-30T15:19:07.7444563Z   diagnostic_summary=
2025-09-30T15:19:07.7447997Z    tf_rpc=ApplyResourceChange tf_req_id=a8315965-18c4-cee1-d02a-debacd7e836d tf_resource_type=mongodbatlas_network_peering tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 diagnostic_detail="" diagnostic_severity=ERROR
2025-09-30T15:19:07.7449475Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (127.98s)
```

- 2025-10-01
  - PASS 3 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02 PASS 3 minutes