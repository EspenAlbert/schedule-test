# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicGCP Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 9)
Success rate: 75.68%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-25 00:56](#error-2026-04-25t0056230000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69ec0edb1e137e366f0021af/privateEndpoint/endpointService | dev |  | 2.00s
[2026-04-27 01:03](#error-2026-04-27t0103500000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69eeb308325f0c8ac0c04937/privateEndpoint/endpointService | dev |  | 2.04s
[2026-04-28 01:02](#error-2026-04-28t0102490000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f0051b9f1c1f1daca38810/privateEndpoint/endpointService | dev |  | 2.04s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.03s
[2026-05-01 01:10](#error-2026-05-01t0110460000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f3faa56381d809dde99230/privateEndpoint/endpointService | dev |  | 2.01s
[2026-05-05 01:06](#error-2026-05-05t0106290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 minutes
- 2026-04-08 PASS 6 minutes
- 2026-04-09 PASS 5 minutes
- 2026-04-10 PASS 9 minutes
- 2026-04-11 PASS 5 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 minutes
- 2026-04-14 PASS 8 minutes
- 2026-04-15 PASS 8 minutes
- 2026-04-16 PASS 10 minutes
- 2026-04-17 PASS 8 minutes
- 2026-04-18 PASS 7 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 minutes
- 2026-04-21 PASS 5 minutes
- 2026-04-22 PASS 37 minutes
- 2026-04-23 PASS 11 minutes
- 2026-04-24 PASS 11 minutes
- 2026-04-25

### Error 2026-04-25T00:56:23+00:00
```
2026-04-25T00:56:23.4497288Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-04-25T00:56:23.4512078Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-04-25T00:56:23.4542455Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-04-25T00:56:23.4543044Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:56:23.4543469Z         
2026-04-25T00:56:23.4545312Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69ec0edb1e137e366f0021af/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-25T00:56:23.4547012Z         
2026-04-25T00:56:23.4547410Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-25T00:56:23.4548155Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-25T00:56:23.4548870Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-25T00:56:23.4549243Z         
2026-04-25T00:56:23.4550265Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.04s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:03:50+00:00
```
2026-04-27T01:03:50.6616286Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-04-27T01:03:50.6625174Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-04-27T01:03:50.6657959Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-04-27T01:03:50.6658512Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-04-27T01:03:50.6658929Z         
2026-04-27T01:03:50.6660849Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69eeb308325f0c8ac0c04937/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-27T01:03:50.6662094Z         
2026-04-27T01:03:50.6662487Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-27T01:03:50.6663364Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-27T01:03:50.6664073Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-27T01:03:50.6664436Z         
2026-04-27T01:03:50.6665447Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.45s)
```

- 2026-04-28

### Error 2026-04-28T01:02:49+00:00
```
2026-04-28T01:02:49.3797512Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-04-28T01:02:49.3812138Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-04-28T01:02:49.3843894Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-04-28T01:02:49.3844759Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-04-28T01:02:49.3845254Z         
2026-04-28T01:02:49.3847048Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f0051b9f1c1f1daca38810/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-28T01:02:49.3848282Z         
2026-04-28T01:02:49.3848681Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-28T01:02:49.3849442Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-28T01:02:49.3850150Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-28T01:02:49.3850517Z         
2026-04-28T01:02:49.3853164Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.38s)
```

- 2026-04-29 PASS 5 minutes
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0757189Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-04-30T01:11:18.0758309Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-1663819857404926840
2026-04-30T01:11:18.0759214Z     resource_test.go:83: 
2026-04-30T01:11:18.0760954Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0764960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0768855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0772819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-04-30T01:11:18.0774583Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0778941Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0781214Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-04-30T01:11:18.0784885Z         	Messages:   	Project creation failed: test-acc-tf-p-1663819857404926840, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0787521Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (86.34s)
```

- 2026-05-01

### Error 2026-05-01T01:10:46+00:00
```
2026-05-01T01:10:46.8208544Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-01T01:10:46.8218137Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-01T01:10:46.8274260Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-01T01:10:46.8274811Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-01T01:10:46.8275237Z         
2026-05-01T01:10:46.8277136Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f3faa56381d809dde99230/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-01T01:10:46.8278466Z         
2026-05-01T01:10:46.8278872Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-01T01:10:46.8279646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-01T01:10:46.8280378Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-01T01:10:46.8280762Z         
2026-05-01T01:10:46.8282345Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.12s)
```

- 2026-05-02 PASS 6 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 minutes
- 2026-05-05

### Error 2026-05-05T01:06:29+00:00
```
2026-05-05T01:06:29.4744547Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-05T01:06:29.4745579Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-7218375555553642963
2026-05-05T01:06:29.4746101Z     resource_test.go:83: 
2026-05-05T01:06:29.4747020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:06:29.4748817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:06:29.4750608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:06:29.4752505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-05-05T01:06:29.4753336Z         	Error:      	Received unexpected error:
2026-05-05T01:06:29.4755544Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4756602Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-05-05T01:06:29.4758343Z         	Messages:   	Project creation failed: test-acc-tf-p-7218375555553642963, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4759545Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (83.40s)
```

- 2026-05-06 PASS 13 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-03 01:09](#error-2026-05-03t0109140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f69d3fb5d19a28bc1232a0/privateEndpoint/endpointService | qa | 2.05s
[2026-05-04 16:49](#error-2026-05-04t1649410000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f8cb344d55307a68445d9e/privateEndpoint/endpointService | qa | 2.08s
[2026-05-05 08:06](#error-2026-05-05t0806240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f9a213036e3abdaa72a1b1/privateEndpoint/endpointService | qa | 2.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 7 minutes
  - PASS 7 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03

### Error 2026-05-03T01:09:14+00:00
```
2026-05-03T01:09:14.6760950Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-03T01:09:14.6768848Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-03T01:09:14.6789547Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-03T01:09:14.6789960Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-03T01:09:14.6790272Z         
2026-05-03T01:09:14.6791822Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f69d3fb5d19a28bc1232a0/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-03T01:09:14.6792803Z         
2026-05-03T01:09:14.6793118Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-03T01:09:14.6793688Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-03T01:09:14.6794233Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-03T01:09:14.6794518Z         
2026-05-03T01:09:14.6799828Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.53s)
```

- 2026-05-04
  - FAIL 2 seconds

### Error 2026-05-04T16:49:41+00:00
```
2026-05-04T16:49:41.3856563Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-04T16:49:41.3865840Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-04T16:49:41.3920225Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-04T16:49:41.3920749Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-04T16:49:41.3921156Z         
2026-05-04T16:49:41.3922851Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb344d55307a68445d9e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-04T16:49:41.3924461Z         
2026-05-04T16:49:41.3924872Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-04T16:49:41.3925583Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-04T16:49:41.3926278Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-04T16:49:41.3926652Z         
2026-05-04T16:49:41.3929732Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.78s)
```

  - PASS 9 minutes
- 2026-05-05

### Error 2026-05-05T08:06:24+00:00
```
2026-05-05T08:06:24.3225913Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-05-05T08:06:24.3239846Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-05-05T08:06:24.3276376Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-05-05T08:06:24.3277252Z     resource_test.go:89: Step 1/2 error: Error running apply: exit status 1
2026-05-05T08:06:24.3277760Z         
2026-05-05T08:06:24.3279993Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f9a213036e3abdaa72a1b1/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-05T08:06:24.3281618Z         
2026-05-05T08:06:24.3282181Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-05T08:06:24.3283136Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-05T08:06:24.3284014Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-05T08:06:24.3284405Z         
2026-05-05T08:06:24.3303547Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (2.84s)
```

- 2026-05-06 PASS 7 minutes
