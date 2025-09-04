# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 7)
Success rate: 81.58%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:35](#error-2025-08-10t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8be39cf8e2817e3a970/dataFederation/test-acc-tf-6050057086292219295 | qa | flaky_500 | 124.05s
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cdf746882a383c77f4/dataFederation/test-acc-tf-3980999388837853074 | qa | flaky_500 | 120.07s
[2025-08-20 14:01](#error-2025-08-20t1401040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d488f98188003c99812f/dataFederation/test-acc-tf-3736054519861919916 | qa | flaky_500 | 146.06s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d259bbb8c4ee1f811dc/dataFederation/test-acc-tf-2563117512479696363 | qa | flaky_500 | 119.03s
[2025-08-26 00:28](#error-2025-08-26t0028280000) |  | dev |  | 21.04s
[2025-08-27 00:28](#error-2025-08-27t0028220000) |  | dev |  | 18.05s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS a minute
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10

### Error 2025-08-10T00:35:10+00:00
```
2025-08-10T00:35:10.2436918Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-10T00:35:10.2443112Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-3388819347544099789
2025-08-10T00:35:10.2450781Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-10T00:35:10.2481785Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-10T00:35:10.2483410Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-10T00:35:10.2484576Z         
2025-08-10T00:35:10.2489374Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-6050057086292219295): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8be39cf8e2817e3a970/dataFederation/test-acc-tf-6050057086292219295 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-10T00:35:10.2492639Z         
2025-08-10T00:35:10.2493530Z           with mongodbatlas_federated_database_instance.test,
2025-08-10T00:35:10.2496987Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-10T00:35:10.2498459Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-10T00:35:10.2499077Z         
2025-08-10T00:35:10.2499963Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (124.50s)
```

- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.4864190Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-17T00:33:15.4868738Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7773424438750053640
2025-08-17T00:33:15.4876230Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-17T00:33:15.5022262Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-17T00:33:15.5027031Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:15.5028240Z         
2025-08-17T00:33:15.5038457Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-3980999388837853074): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cdf746882a383c77f4/dataFederation/test-acc-tf-3980999388837853074 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T00:33:15.5041015Z         
2025-08-17T00:33:15.5041726Z           with mongodbatlas_federated_database_instance.test,
2025-08-17T00:33:15.5043025Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-17T00:33:15.5044301Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-17T00:33:15.5044988Z         
2025-08-17T00:33:15.5045737Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (120.69s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - FAIL 2 minutes

### Error 2025-08-20T14:01:04+00:00
```
2025-08-20T14:01:04.4955218Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-20T14:01:04.4960252Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7332504699480210158
2025-08-20T14:01:04.4967779Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-20T14:01:04.5024778Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-20T14:01:04.5026289Z     resource_cloud_provider_access_authorization_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-20T14:01:04.5027323Z         
2025-08-20T14:01:04.5031126Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3736054519861919916): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d488f98188003c99812f/dataFederation/test-acc-tf-3736054519861919916 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-20T14:01:04.5033738Z         
2025-08-20T14:01:04.5034304Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (146.65s)
```

- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3358733Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-24T00:32:33.3360169Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-4815040916610818937
2025-08-24T00:32:33.3369415Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-24T00:32:33.3395958Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-24T00:32:33.3397274Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:32:33.3398181Z         
2025-08-24T00:32:33.3401716Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-2563117512479696363): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d259bbb8c4ee1f811dc/dataFederation/test-acc-tf-2563117512479696363 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:32:33.3404169Z         
2025-08-24T00:32:33.3404990Z           with mongodbatlas_federated_database_instance.test,
2025-08-24T00:32:33.3406267Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-24T00:32:33.3407444Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-24T00:32:33.3408039Z         
2025-08-24T00:32:33.3428191Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T00:32:33.3428904Z         
2025-08-24T00:32:33.3432438Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-2563117512479696363): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d259bbb8c4ee1f811dc/dataFederation/test-acc-tf-2563117512479696363 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:32:33.3435004Z         
2025-08-24T00:32:33.3435543Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (119.26s)
```

- 2025-08-25 PASS a minute
- 2025-08-26

### Error 2025-08-26T00:28:28+00:00
```
2025-08-26T00:28:28.6810383Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-26T00:28:28.6811805Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-3910782253623535307
2025-08-26T00:28:28.6818952Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-26T00:28:28.6833868Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-26T00:28:28.6835129Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-08-26T00:28:28.6835983Z         
2025-08-26T00:28:28.6837350Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-6361284206273571154): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-26T00:28:28.6838835Z         	status code: 409, request id: fef82ee1-3edc-4cc0-b6df-e9a7d2f30d34
2025-08-26T00:28:28.6839435Z         
2025-08-26T00:28:28.6839898Z           with aws_iam_role.test_role,
2025-08-26T00:28:28.6840860Z           on terraform_plugin_test.tf line 57, in resource "aws_iam_role" "test_role":
2025-08-26T00:28:28.6841765Z           57: resource "aws_iam_role" "test_role" {
2025-08-26T00:28:28.6842253Z         
2025-08-26T00:28:28.6842766Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (21.42s)
```

- 2025-08-27

### Error 2025-08-27T00:28:22+00:00
```
2025-08-27T00:28:22.1516366Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-27T00:28:22.1517602Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-6772998288193137910
2025-08-27T00:28:22.1524217Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-27T00:28:22.1538292Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-08-27T00:28:22.1539372Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-08-27T00:28:22.1540122Z         
2025-08-27T00:28:22.1541334Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-5805698744340660315): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:28:22.1715449Z         	status code: 409, request id: 523bb04d-336e-4221-b24c-45c1e21401fd
2025-08-27T00:28:22.1716288Z         
2025-08-27T00:28:22.1716982Z           with aws_iam_role.test_role,
2025-08-27T00:28:22.1719152Z           on terraform_plugin_test.tf line 57, in resource "aws_iam_role" "test_role":
2025-08-27T00:28:22.1725870Z           57: resource "aws_iam_role" "test_role" {
2025-08-27T00:28:22.1730049Z         
2025-08-27T00:28:22.1735744Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (18.52s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS 2 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.0963994Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-01T00:31:13.0965504Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2453879147807312037
2025-09-01T00:31:13.0966700Z     resource_cloud_provider_access_authorization_test.go:17: 
2025-09-01T00:31:13.0968379Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.1011618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.1015432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:46
2025-09-01T00:31:13.1019632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:17
2025-09-01T00:31:13.1021207Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.1025886Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1028322Z         	Test:       	TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-01T00:31:13.1032394Z         	Messages:   	Project creation failed: test-acc-tf-p-2453879147807312037, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1034969Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (0.32s)
```

  - PASS a minute
  - PASS 2 minutes
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute