# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicGCP Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:42](#error-2026-05-07t0942040000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService | dev |  | 1.07s
[2026-05-08 01:07](#error-2026-05-08t0107180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fd344f085055a4bc255af6/privateEndpoint/endpointService | dev |  | 2.05s
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-05-12 01:04](#error-2026-05-12t0104480000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a027a3e373288b9dd0f958f/privateEndpoint/endpointService | dev |  | 1.07s
[2026-05-15 01:24](#error-2026-05-15t0124150000) |  | dev |  | 353.00s
[2026-05-16 01:20](#error-2026-05-16t0120140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 11 minutes
  - FAIL a second

### Error 2026-05-07T09:42:04+00:00
```
2026-05-07T09:42:04.1715840Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-07T09:42:04.1728049Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-07T09:42:04.1796153Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-07T09:42:04.1796682Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:42:04.1797102Z         
2026-05-07T09:42:04.1798941Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-07T09:42:04.1800264Z         
2026-05-07T09:42:04.1800653Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-07T09:42:04.1801405Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-07T09:42:04.1802118Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-07T09:42:04.1802499Z         
2026-05-07T09:42:04.1808598Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.75s)
```

- 2026-05-08

### Error 2026-05-08T01:07:18+00:00
```
2026-05-08T01:07:18.5263583Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-08T01:07:18.5272464Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-08T01:07:18.5304394Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-08T01:07:18.5304958Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-08T01:07:18.5305364Z         
2026-05-08T01:07:18.5307246Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fd344f085055a4bc255af6/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-08T01:07:18.5308469Z         
2026-05-08T01:07:18.5308864Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-08T01:07:18.5309601Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-08T01:07:18.5310657Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-08T01:07:18.5311032Z         
2026-05-08T01:07:18.5332950Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.48s)
```

- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1273222Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-09T01:23:39.1273821Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-3728943461687763040
2026-05-09T01:23:39.1274333Z     resource_test.go:83: 
2026-05-09T01:23:39.1275282Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1277173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1279379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1281387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-05-09T01:23:39.1282236Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1284273Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1285361Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-05-09T01:23:39.1287218Z         	Messages:   	Project creation failed: test-acc-tf-p-3728943461687763040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1288711Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (74.75s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 5 minutes
- 2026-05-12

### Error 2026-05-12T01:04:48+00:00
```
2026-05-12T01:04:48.9136454Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-12T01:04:48.9159371Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-12T01:04:48.9209169Z    test_terraform_path=/home/runner/work/_temp/8234b53a-d555-4ae4-928e-19ad00a92dc9/terraform
2026-05-12T01:04:48.9235686Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-12T01:04:48.9236622Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-12T01:04:48.9237499Z         
2026-05-12T01:04:48.9240908Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a027a3e373288b9dd0f958f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-12T01:04:48.9243499Z         
2026-05-12T01:04:48.9244178Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-12T01:04:48.9245464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-12T01:04:48.9246605Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-12T01:04:48.9247240Z         
2026-05-12T01:04:48.9258489Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.71s)
```

- 2026-05-13 PASS 6 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15

### Error 2026-05-15T01:24:15+00:00
```
2026-05-15T01:24:15.3495769Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-15T01:24:15.3508408Z    test_terraform_path=/home/runner/work/_temp/17905f83-e9f0-479f-9f86-91ae1012ffac/terraform test_working_directory=/tmp/plugintest2775193764 test_name=TestAccPrivateLinkEndpoint_basicGCP test_step_number=1
2026-05-15T01:24:15.3511114Z     resource_test.go:89: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-05-15T01:24:15.3511946Z         
2026-05-15T01:24:15.3514694Z         Error: error reading MongoDB Private Endpoints Connection(6a066f60649b96da6ebabdaf): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f5cbf5881c97de60fcd/privateEndpoint/GCP/endpointService/6a066f60649b96da6ebabdaf GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-05-15T01:24:15.3516678Z         
2026-05-15T01:24:15.3517389Z           with data.mongodbatlas_privatelink_endpoint.this,
2026-05-15T01:24:15.3518593Z           on terraform_plugin_test.tf line 19, in data "mongodbatlas_privatelink_endpoint" "this":
2026-05-15T01:24:15.3519365Z           19: 		data "mongodbatlas_privatelink_endpoint" "this" {
2026-05-15T01:24:15.3519751Z         
2026-05-15T01:24:15.3520074Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (353.04s)
```

- 2026-05-16

### Error 2026-05-16T01:20:14+00:00
```
2026-05-16T01:20:14.0091258Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-16T01:20:14.0092359Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-2645042128192322204
2026-05-16T01:20:14.0093274Z     resource_test.go:83: 
2026-05-16T01:20:14.0095043Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:14.0098728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:14.0102619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:14.0106504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-05-16T01:20:14.0108123Z         	Error:      	Received unexpected error:
2026-05-16T01:20:14.0112271Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0114306Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-05-16T01:20:14.0117825Z         	Messages:   	Project creation failed: test-acc-tf-p-2645042128192322204, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0120345Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (62.06s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 13 minutes
- 2026-05-19 PASS 5 minutes
- 2026-05-20 PASS 6 minutes
- 2026-05-21 PASS 5 minutes
- 2026-05-22 PASS 7 minutes
- 2026-05-23 PASS 6 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 minutes
- 2026-05-26 PASS 6 minutes
- 2026-05-27 PASS 6 minutes
- 2026-05-28 PASS 6 minutes
- 2026-05-29 PASS 6 minutes
- 2026-05-30 PASS 7 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 minutes
- 2026-06-02 PASS 5 minutes
- 2026-06-03 PASS 11 minutes
- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 5 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 11 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
