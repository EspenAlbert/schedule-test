# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAWS Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-14 00:59](#error-2026-04-14t0059360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-04-16 01:01](#error-2026-04-16t0101240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032598379397d109c3357/privateEndpoint/endpointService | dev |  | 4.05s
[2026-04-18 00:52](#error-2026-04-18t0052320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService | dev | flaky_500 | 5.07s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-05-05 01:06](#error-2026-05-05t0106290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 4 minutes
- 2026-04-10 PASS 4 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14

### Error 2026-04-14T00:59:36+00:00
```
2026-04-14T00:59:36.5895444Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-04-14T00:59:36.5896771Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5687755035421704294
2026-04-14T00:59:36.5897824Z     resource_test.go:24: 
2026-04-14T00:59:36.5900096Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:59:36.5905151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:59:36.5908754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:59:36.5911791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:30
2026-04-14T00:59:36.5914034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:24
2026-04-14T00:59:36.5915276Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-14T00:59:36.5915833Z         	Error:      	Received unexpected error:
2026-04-14T00:59:36.5918144Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:59:36.5919222Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-04-14T00:59:36.5921000Z         	Messages:   	Project creation failed: test-acc-tf-p-5687755035421704294, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:59:36.5922223Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (62.10s)
```

- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T01:01:24+00:00
```
2026-04-16T01:01:24.7839078Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-04-16T01:01:24.7840478Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-8626790746999463369
2026-04-16T01:01:24.7849396Z === CONT  TestAccPrivateLinkEndpoint_basicAWS
2026-04-16T01:01:24.7883290Z === NAME  TestAccPrivateLinkEndpoint_basicAWS
2026-04-16T01:01:24.7884219Z     resource_test.go:24: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:01:24.7884919Z         
2026-04-16T01:01:24.7888229Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032598379397d109c3357/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-16T01:01:24.7890496Z         
2026-04-16T01:01:24.7891174Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-16T01:01:24.7892717Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-16T01:01:24.7893986Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-16T01:01:24.7894624Z         
2026-04-16T01:01:24.7922069Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (4.46s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18

### Error 2026-04-18T00:52:32+00:00
```
2026-04-18T00:52:32.4765596Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-04-18T00:52:32.4769494Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-632844175343874438
2026-04-18T00:52:32.4783442Z === CONT  TestAccPrivateLinkEndpoint_basicAWS
2026-04-18T00:52:32.4876961Z === NAME  TestAccPrivateLinkEndpoint_basicAWS
2026-04-18T00:52:32.4877490Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-04-18T00:52:32.4877902Z         
2026-04-18T00:52:32.4879789Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:52:32.4881102Z         
2026-04-18T00:52:32.4881668Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-18T00:52:32.4882445Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-18T00:52:32.4883164Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-18T00:52:32.4883536Z         
2026-04-18T00:52:32.4883821Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (5.66s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 36 minutes
- 2026-04-23 PASS 4 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0689729Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-04-30T01:11:18.0690922Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2199535940037907315
2026-04-30T01:11:18.0692157Z     resource_test.go:25: 
2026-04-30T01:11:18.0693945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0699405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0703045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0707152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-04-30T01:11:18.0711109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-04-30T01:11:18.0713574Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:11:18.0714687Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0718768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0720853Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-04-30T01:11:18.0724669Z         	Messages:   	Project creation failed: test-acc-tf-p-2199535940037907315, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0727148Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (62.03s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05

### Error 2026-05-05T01:06:29+00:00
```
2026-05-05T01:06:29.4705041Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-05-05T01:06:29.4705941Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7714171279698950505
2026-05-05T01:06:29.4706632Z     resource_test.go:25: 
2026-05-05T01:06:29.4707782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:06:29.4712052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:06:29.4715841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:06:29.4718085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-05-05T01:06:29.4720065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-05-05T01:06:29.4721309Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T01:06:29.4721837Z         	Error:      	Received unexpected error:
2026-05-05T01:06:29.4723758Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4725099Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-05-05T01:06:29.4726870Z         	Messages:   	Project creation failed: test-acc-tf-p-7714171279698950505, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4728075Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (69.26s)
```

- 2026-05-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 minutes
- 2026-05-04
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 4 minutes
