# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_completeAWS Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:46](#error-2026-04-09t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.09s
[2026-04-11 00:51](#error-2026-04-11t0051300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-04-16 01:01](#error-2026-04-16t0101240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService | dev |  | 55.09s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 minutes
- 2026-04-08 PASS 7 minutes
- 2026-04-09

### Error 2026-04-09T00:46:48+00:00
```
2026-04-09T00:46:48.3614008Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-04-09T00:46:48.3615156Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1431028395513174734
2026-04-09T00:46:48.3615742Z     resource_test.go:26: 
2026-04-09T00:46:48.3616720Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:46:48.3620741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:46:48.3623723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:46:48.3627273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-04-09T00:46:48.3628319Z         	Error:      	Received unexpected error:
2026-04-09T00:46:48.3630296Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:48.3631442Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-04-09T00:46:48.3633291Z         	Messages:   	Project creation failed: test-acc-tf-p-1431028395513174734, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:48.3635568Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (93.86s)
```

- 2026-04-10 PASS 8 minutes
- 2026-04-11

### Error 2026-04-11T00:51:30+00:00
```
2026-04-11T00:51:30.3687140Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-04-11T00:51:30.3688117Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8516896814156002135
2026-04-11T00:51:30.3689416Z     resource_test.go:26: 
2026-04-11T00:51:30.3691340Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:51:30.3694596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:51:30.3697626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:51:30.3700823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-04-11T00:51:30.3701974Z         	Error:      	Received unexpected error:
2026-04-11T00:51:30.3704114Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:51:30.3705669Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-04-11T00:51:30.3707619Z         	Messages:   	Project creation failed: test-acc-tf-p-8516896814156002135, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:51:30.3721538Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (62.49s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 7 minutes
- 2026-04-14 PASS 5 minutes
- 2026-04-15 PASS 6 minutes
- 2026-04-16

### Error 2026-04-16T01:01:24+00:00
```
2026-04-16T01:01:24.7929412Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-04-16T01:01:24.7930396Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-4854006478722368834
2026-04-16T01:01:24.7935091Z === CONT  TestAccPrivateLinkEndpointService_completeAWS
2026-04-16T01:01:24.8019496Z === NAME  TestAccPrivateLinkEndpointService_completeAWS
2026-04-16T01:01:24.8020014Z     resource_test.go:31: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:01:24.8020392Z         
2026-04-16T01:01:24.8022268Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-16T01:01:24.8023471Z         
2026-04-16T01:01:24.8023835Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-16T01:01:24.8024522Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-16T01:01:24.8025181Z           20: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-16T01:01:24.8025522Z         
2026-04-16T01:01:24.8025979Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (55.91s)
```

- 2026-04-17 PASS 5 minutes
- 2026-04-18 PASS 7 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 minutes
- 2026-04-21 PASS 6 minutes
- 2026-04-22 PASS 37 minutes
- 2026-04-23 PASS 10 minutes
- 2026-04-24 PASS 7 minutes
- 2026-04-25 PASS 6 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 minutes
- 2026-04-28 PASS 6 minutes
- 2026-04-29 PASS 7 minutes
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0887994Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-04-30T01:11:18.0888910Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-7453826858595420190
2026-04-30T01:11:18.0889655Z     resource_test.go:26: 
2026-04-30T01:11:18.0890945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0893522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0895812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0898267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-04-30T01:11:18.0899323Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0901598Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0903057Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-04-30T01:11:18.0905216Z         	Messages:   	Project creation failed: test-acc-tf-p-7453826858595420190, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0906929Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (62.35s)
```

- 2026-05-01 PASS 7 minutes
- 2026-05-02 PASS 6 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 minutes
- 2026-05-05 PASS 10 minutes
- 2026-05-06 PASS 10 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 8 minutes
  - PASS 6 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 7 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 minutes
- 2026-05-04
  - PASS 6 minutes
  - PASS 5 minutes
- 2026-05-05 PASS 5 minutes
- 2026-05-06 PASS 6 minutes
