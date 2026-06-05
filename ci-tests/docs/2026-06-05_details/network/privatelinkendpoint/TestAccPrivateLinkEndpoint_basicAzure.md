# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAzure Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:42](#error-2026-05-07t0942040000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService | dev |  | 1.07s
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.10s
[2026-05-16 01:20](#error-2026-05-16t0120140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.09s
[2026-05-21 01:27](#error-2026-05-21t0127550000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a0e59b2a2ebcd59a4eff99e/privateEndpoint/endpointService | dev |  | 1.03s
[2026-05-30 01:29](#error-2026-05-30t0129140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-06-05 01:31](#error-2026-06-05t0131220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a2220e042e1e504cd7af19e/privateEndpoint/endpointService | dev |  | 1.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 2 minutes
  - FAIL a second

### Error 2026-05-07T09:42:04+00:00
```
2026-05-07T09:42:04.1714787Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-07T09:42:04.1728432Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-05-07T09:42:04.1749664Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-05-07T09:42:04.1750233Z     resource_test.go:62: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:42:04.1750678Z         
2026-05-07T09:42:04.1752549Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-07T09:42:04.1753883Z         
2026-05-07T09:42:04.1754278Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-07T09:42:04.1755376Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-07T09:42:04.1756114Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-07T09:42:04.1756494Z         
2026-05-07T09:42:04.1809027Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.75s)
```

- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1256303Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-09T01:23:39.1257371Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-4329895211033055801
2026-05-09T01:23:39.1258226Z     resource_test.go:56: 
2026-05-09T01:23:39.1259204Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1261107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1262993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1265001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-05-09T01:23:39.1265855Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1268270Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1269640Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-05-09T01:23:39.1271517Z         	Messages:   	Project creation failed: test-acc-tf-p-4329895211033055801, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1272792Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (74.99s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS 2 minutes
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T01:20:14+00:00
```
2026-05-16T01:20:14.0061278Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-16T01:20:14.0062388Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-2542737555262774129
2026-05-16T01:20:14.0063326Z     resource_test.go:56: 
2026-05-16T01:20:14.0065103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:14.0068731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:14.0072596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:14.0076489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-05-16T01:20:14.0078086Z         	Error:      	Received unexpected error:
2026-05-16T01:20:14.0082181Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0084230Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-05-16T01:20:14.0087738Z         	Messages:   	Project creation failed: test-acc-tf-p-2542737555262774129, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0090517Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (118.93s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 3 minutes
- 2026-05-21

### Error 2026-05-21T01:27:55+00:00
```
2026-05-21T01:27:55.4870853Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-21T01:27:55.4888404Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-05-21T01:27:55.4943850Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-05-21T01:27:55.4944715Z     resource_test.go:62: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:27:55.4945391Z         
2026-05-21T01:27:55.4948590Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0e59b2a2ebcd59a4eff99e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-21T01:27:55.4950672Z         
2026-05-21T01:27:55.4951307Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-21T01:27:55.4952696Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-21T01:27:55.4953870Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-21T01:27:55.4954455Z         
2026-05-21T01:27:55.4954917Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.35s)
```

- 2026-05-22 PASS a minute
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS a minute
- 2026-05-27 PASS a minute
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 4 minutes
- 2026-05-30

### Error 2026-05-30T01:29:14+00:00
```
2026-05-30T01:29:14.4362297Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-30T01:29:14.4363003Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-2293659302393512859
2026-05-30T01:29:14.4363568Z     resource_test.go:56: 
2026-05-30T01:29:14.4364619Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:29:14.4367150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:29:14.4369304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:29:14.4371670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-05-30T01:29:14.4372563Z         	Error:      	Received unexpected error:
2026-05-30T01:29:14.4374848Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4375956Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-05-30T01:29:14.4377930Z         	Messages:   	Project creation failed: test-acc-tf-p-2293659302393512859, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4379124Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (68.13s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05

### Error 2026-06-05T01:31:22+00:00
```
2026-06-05T01:31:22.6711969Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-06-05T01:31:22.6740549Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-06-05T01:31:22.6775401Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-06-05T01:31:22.6776391Z     resource_test.go:62: Step 1/2 error: Error running apply: exit status 1
2026-06-05T01:31:22.6777133Z         
2026-06-05T01:31:22.6780409Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e042e1e504cd7af19e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-06-05T01:31:22.6782890Z         
2026-06-05T01:31:22.6783608Z           with mongodbatlas_privatelink_endpoint.this,
2026-06-05T01:31:22.6784957Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-06-05T01:31:22.6786478Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-06-05T01:31:22.6787153Z         
2026-06-05T01:31:22.6806523Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.51s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
