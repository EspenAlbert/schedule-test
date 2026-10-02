# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 8)
Success rate: 78.95%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-04 01:54](#error-2026-09-04t0154490000) |  | dev | flaky_500 | 2.09s
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 4424.03s
[2026-09-18 03:08](#error-2026-09-18t0308430000) |  | dev |  | 4539.04s
[2026-09-24 03:04](#error-2026-09-24t0304330000) |  | dev |  | 4432.08s
[2026-09-29 15:24](#error-2026-09-29t1524490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6abbc0e41d8c0f7732567b51/streams/test-acc-tf-s-8397226238240103462/connections/test-acc-tf-4074691166025180208 | dev | flaky_500 | 1776.00s
[2026-09-30 03:54](#error-2026-09-30t0354310000) |  | dev | timeout | 4305.05s
[2026-09-30 14:47](#error-2026-09-30t1447310000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abd0626b87779cfdeba0f6b/streams/privateLinkConnections/6abd1d15c9ca6659ab0cbf3f | dev |  | 2795.02s
[2026-10-02 04:31](#error-2026-10-02t0431490000) |  | dev | timeout | 4402.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 47 minutes
- 2026-09-03 PASS an hour
- 2026-09-04

### Error 2026-09-04T01:54:49+00:00
```
2026-09-04T01:54:49.7193894Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-04T01:54:49.7194963Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-04T01:54:49.7206396Z   
2026-09-04T01:54:49.7206981Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-04T01:54:49.7207507Z         
2026-09-04T01:54:49.7212083Z         Error: building account: could not acquire access token to parse claims: clientCredentialsToken: received HTTP status 401 with response: {"error":"invalid_client","error_description":"AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 404f588b-abe2-4e51-8cdf-8406b65c1500 Correlation ID: 86c99e2c-3387-4fa6-bb97-e5640112ff39 Timestamp: 2026-09-04 01:51:06Z","error_codes":[7000222],"timestamp":"2026-09-04 01:51:06Z","trace_id":"404f588b-abe2-4e51-8cdf-8406b65c1500","correlation_id":"86c99e2c-3387-4fa6-bb97-e5640112ff39","error_uri":"https://login.microsoftonline.com/error?code=7000222"}
2026-09-04T01:54:49.7214785Z         
2026-09-04T01:54:49.7215276Z           with provider["registry.terraform.io/hashicorp/azurerm"],
2026-09-04T01:54:49.7215919Z           on terraform_plugin_test.tf line 23, in provider "azurerm":
2026-09-04T01:54:49.7216409Z           23: 		provider "azurerm" {
2026-09-04T01:54:49.7216730Z         
2026-09-04T01:54:49.7217158Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (2.93s)
```

- 2026-09-05 PASS 28 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 25 minutes
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6898031Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6899102Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6910225Z    test_terraform_path=/home/runner/work/_temp/ed2dce9e-4d43-4c57-a532-2bde85aca16f/terraform test_working_directory=/tmp/plugintest441196021 test_step_number=1 test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-08T04:29:24.6911525Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6912032Z         
2026-09-08T04:29:24.6912505Z         Error: error when waiting for status transition in creation
2026-09-08T04:29:24.6912905Z         
2026-09-08T04:29:24.6913355Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-09-08T04:29:24.6914410Z           on terraform_plugin_test.tf line 103, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-09-08T04:29:24.6915844Z          103: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-09-08T04:29:24.6916315Z         
2026-09-08T04:29:24.6916864Z         timeout while waiting for state to become 'DONE, FAILED' (last state: 'IDLE',
2026-09-08T04:29:24.6917361Z         timeout: 1h0m0s)
2026-09-08T04:29:24.6917830Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4424.26s)
```

- 2026-09-09 PASS 28 minutes
- 2026-09-10 PASS 28 minutes
- 2026-09-11
  - PASS 38 minutes
  - PASS 27 minutes
- 2026-09-12 PASS 29 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes
- 2026-09-15 PASS 29 minutes
- 2026-09-16 PASS 30 minutes
- 2026-09-17 PASS 30 minutes
- 2026-09-18

### Error 2026-09-18T03:08:43+00:00
```
2026-09-18T03:08:43.8669396Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-18T03:08:43.8670777Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-18T03:08:43.8682303Z   
2026-09-18T03:08:43.8682986Z     resource_stream_connection_test.go:1636: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-18T03:08:43.8683601Z         stdout
2026-09-18T03:08:43.8683852Z         
2026-09-18T03:08:43.8684641Z         Terraform used the selected providers to generate the following execution
2026-09-18T03:08:43.8685368Z         plan. Resource actions are indicated with the following symbols:
2026-09-18T03:08:43.8685859Z           ~ update in-place
2026-09-18T03:08:43.8686152Z         
2026-09-18T03:08:43.8686568Z         Terraform will perform the following actions:
2026-09-18T03:08:43.8686931Z         
2026-09-18T03:08:43.8687423Z           # azurerm_resource_group.blob_rg will be updated in-place
2026-09-18T03:08:43.8688017Z           ~ resource "azurerm_resource_group" "blob_rg" {
2026-09-18T03:08:43.8689190Z                 id         = "/subscriptions/***/resourceGroups/test-acc-tf-8831583733722124888"
2026-09-18T03:08:43.8689937Z                 name       = "test-acc-tf-8831583733722124888"
2026-09-18T03:08:43.8690639Z               ~ tags       = {
2026-09-18T03:08:43.8691180Z                   - "isleakeditem" = "true" -> null
2026-09-18T03:08:43.8691570Z                 }
2026-09-18T03:08:43.8692020Z                 # (2 unchanged attributes hidden)
2026-09-18T03:08:43.8692374Z             }
2026-09-18T03:08:43.8692620Z         
2026-09-18T03:08:43.8692997Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-18T03:08:43.8693512Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4539.44s)
```

- 2026-09-19 PASS 27 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 28 minutes
- 2026-09-22 PASS 27 minutes
- 2026-09-23 PASS 26 minutes
- 2026-09-24

### Error 2026-09-24T03:04:33+00:00
```
2026-09-24T03:04:33.5190216Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-24T03:04:33.5192419Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-24T03:04:33.5211547Z   
2026-09-24T03:04:33.5212740Z     resource_stream_connection_test.go:1636: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2026-09-24T03:04:33.5214134Z         stdout
2026-09-24T03:04:33.5214570Z         
2026-09-24T03:04:33.5215905Z         Terraform used the selected providers to generate the following execution
2026-09-24T03:04:33.5217132Z         plan. Resource actions are indicated with the following symbols:
2026-09-24T03:04:33.5217977Z           ~ update in-place
2026-09-24T03:04:33.5218477Z         
2026-09-24T03:04:33.5219162Z         Terraform will perform the following actions:
2026-09-24T03:04:33.5219785Z         
2026-09-24T03:04:33.5220621Z           # azurerm_resource_group.blob_rg will be updated in-place
2026-09-24T03:04:33.5221849Z           ~ resource "azurerm_resource_group" "blob_rg" {
2026-09-24T03:04:33.5223801Z                 id         = "/subscriptions/***/resourceGroups/test-acc-tf-2845157583757575946"
2026-09-24T03:04:33.5225055Z                 name       = "test-acc-tf-2845157583757575946"
2026-09-24T03:04:33.5225844Z               ~ tags       = {
2026-09-24T03:04:33.5226741Z                   - "isleakeditem" = "true" -> null
2026-09-24T03:04:33.5227397Z                 }
2026-09-24T03:04:33.5228111Z                 # (2 unchanged attributes hidden)
2026-09-24T03:04:33.5228677Z             }
2026-09-24T03:04:33.5229064Z         
2026-09-24T03:04:33.5229675Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-24T03:04:33.5230515Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4432.78s)
```

- 2026-09-25 PASS 26 minutes
- 2026-09-26 PASS 28 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 27 minutes
- 2026-09-29
  - PASS 46 minutes
  - FAIL 29 minutes

### Error 2026-09-29T15:24:49+00:00
```
2026-09-29T15:24:49.0334971Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-29T15:24:49.0335931Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-29T15:24:49.0346830Z    test_working_directory=/tmp/plugintest1742633100 test_terraform_path=/home/runner/work/_temp/5f3187db-e638-481e-829b-d4aacb731e9e/terraform test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink test_step_number=1
2026-09-29T15:24:49.0348029Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-09-29T15:24:49.0348491Z         
2026-09-29T15:24:49.0348794Z         Error: error fetching resource
2026-09-29T15:24:49.0349087Z         
2026-09-29T15:24:49.0349454Z           with mongodbatlas_stream_connection.test,
2026-09-29T15:24:49.0350070Z           on terraform_plugin_test.tf line 113, in resource "mongodbatlas_stream_connection" "test":
2026-09-29T15:24:49.0350640Z          113: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-29T15:24:49.0350987Z         
2026-09-29T15:24:49.0351864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbc0e41d8c0f7732567b51/streams/test-acc-tf-s-8397226238240103462/connections/test-acc-tf-4074691166025180208
2026-09-29T15:24:49.0352682Z         GET: HTTP 401 Unauthorized (Error code: "UNEXPECTED_ERROR") Detail: You are
2026-09-29T15:24:49.0353260Z         not authorized for this resource. Reason: Unauthorized. Params: [],
2026-09-29T15:24:49.0353692Z         BadRequestDetail: 
2026-09-29T15:24:49.0354195Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (1776.04s)
```

  - PASS an hour
- 2026-09-30
  - FAIL an hour

### Error 2026-09-30T03:54:31+00:00
```
2026-09-30T03:54:31.9977089Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-30T03:54:31.9978212Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-30T03:54:31.9989178Z    test_terraform_path=/home/runner/work/_temp/9db32149-28c8-44d0-b5c1-b846194fcb9a/terraform test_working_directory=/tmp/plugintest1531099523 test_step_number=1 test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-30T03:54:31.9990477Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running apply: exit status 1
2026-09-30T03:54:31.9990990Z         
2026-09-30T03:54:31.9991447Z         Error: error when waiting for status transition in creation
2026-09-30T03:54:31.9991847Z         
2026-09-30T03:54:31.9992292Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-09-30T03:54:31.9993130Z           on terraform_plugin_test.tf line 103, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-09-30T03:54:31.9993930Z          103: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-09-30T03:54:31.9994358Z         
2026-09-30T03:54:31.9994887Z         timeout while waiting for state to become 'DONE, FAILED' (last state: 'IDLE',
2026-09-30T03:54:31.9995392Z         timeout: 1h0m0s)
2026-09-30T03:54:31.9996293Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4305.54s)
```

  - FAIL 46 minutes

### Error 2026-09-30T14:47:31+00:00
```
2026-09-30T14:47:31.3929492Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-30T14:47:31.3930527Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-30T14:47:31.3942591Z   
2026-09-30T14:47:31.3943261Z     resource_stream_connection_test.go:1636: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-30T14:47:31.3943839Z         
2026-09-30T14:47:31.3944238Z         Error: error waiting for state transition
2026-09-30T14:47:31.3944595Z         
2026-09-30T14:47:31.3945395Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abd0626b87779cfdeba0f6b/streams/privateLinkConnections/6abd1d15c9ca6659ab0cbf3f
2026-09-30T14:47:31.3946309Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-30T14:47:31.3947005Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-30T14:47:31.3947825Z         [], BadRequestDetail: 
2026-09-30T14:47:31.3948324Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (2795.22s)
```

  - PASS 28 minutes
- 2026-10-01 PASS 25 minutes
- 2026-10-02

### Error 2026-10-02T04:31:49+00:00
```
2026-10-02T04:31:49.7544255Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-10-02T04:31:49.7545561Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-10-02T04:31:49.7557852Z    test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink test_terraform_path=/home/runner/work/_temp/338da8e4-4146-4b35-b3c4-c007a3ac0763/terraform test_working_directory=/tmp/plugintest3551984970 test_step_number=1
2026-10-02T04:31:49.7559559Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running apply: exit status 1
2026-10-02T04:31:49.7560160Z         
2026-10-02T04:31:49.7560700Z         Error: error when waiting for status transition in creation
2026-10-02T04:31:49.7561185Z         
2026-10-02T04:31:49.7561715Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-10-02T04:31:49.7562726Z           on terraform_plugin_test.tf line 103, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-10-02T04:31:49.7563656Z          103: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-10-02T04:31:49.7564144Z         
2026-10-02T04:31:49.7564787Z         timeout while waiting for state to become 'DONE, FAILED' (last state: 'IDLE',
2026-10-02T04:31:49.7565514Z         timeout: 1h0m0s)
2026-10-02T04:31:49.7566057Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4402.33s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 25 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 26 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 27 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 29 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 28 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
