# autogen_fast/maintenancewindowapi/TestAccMaintenanceWindowAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:46](#error-2026-04-09t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.07s
[2026-04-11 00:48](#error-2026-04-11t0048580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-04-30 01:01](#error-2026-04-30t0101120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-05-05 00:57](#error-2026-05-05t0057430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 seconds
- 2026-04-08 PASS 13 seconds
- 2026-04-09

### Error 2026-04-09T00:46:50+00:00
```
2026-04-09T00:46:50.3809754Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-04-09T00:46:50.3810607Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3003344268995697598
2026-04-09T00:46:50.3811436Z     resource_test.go:17: 
2026-04-09T00:46:50.3832032Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:46:50.3835259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:46:50.3837211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:46:50.3839308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-04-09T00:46:50.3840218Z         	Error:      	Received unexpected error:
2026-04-09T00:46:50.3842268Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:50.3844588Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-04-09T00:46:50.3848855Z         	Messages:   	Project creation failed: test-acc-tf-p-3003344268995697598, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:50.3852535Z --- FAIL: TestAccMaintenanceWindowAPI_basic (89.69s)
```

- 2026-04-10 PASS 12 seconds
- 2026-04-11

### Error 2026-04-11T00:48:58+00:00
```
2026-04-11T00:48:58.0304134Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-04-11T00:48:58.0305193Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-8098329400919199282
2026-04-11T00:48:58.0306055Z     resource_test.go:17: 
2026-04-11T00:48:58.0307627Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:48:58.0310780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:48:58.0313765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:48:58.0316022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-04-11T00:48:58.0316899Z         	Error:      	Received unexpected error:
2026-04-11T00:48:58.0321316Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:58.0322892Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-04-11T00:48:58.0324661Z         	Messages:   	Project creation failed: test-acc-tf-p-8098329400919199282, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:58.0325865Z --- FAIL: TestAccMaintenanceWindowAPI_basic (62.10s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 13 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 13 seconds
- 2026-04-18 PASS 17 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 seconds
- 2026-04-21 PASS 53 seconds
- 2026-04-22 PASS 14 seconds
- 2026-04-23 PASS 37 seconds
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 47 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 14 seconds
- 2026-04-30

### Error 2026-04-30T01:01:12+00:00
```
2026-04-30T01:01:12.3552714Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-04-30T01:01:12.3553294Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-177426820283119777
2026-04-30T01:01:12.3553785Z     resource_test.go:17: 
2026-04-30T01:01:12.3554664Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:12.3556347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:12.3558014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:12.3559996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-04-30T01:01:12.3560914Z         	Error:      	Received unexpected error:
2026-04-30T01:01:12.3562703Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3563714Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-04-30T01:01:12.3565368Z         	Messages:   	Project creation failed: test-acc-tf-p-177426820283119777, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3566547Z --- FAIL: TestAccMaintenanceWindowAPI_basic (73.09s)
```

- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 44 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 12 seconds
- 2026-05-05

### Error 2026-05-05T00:57:43+00:00
```
2026-05-05T00:57:43.1982305Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-05T00:57:43.1982959Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-8125845251712968121
2026-05-05T00:57:43.1983505Z     resource_test.go:17: 
2026-05-05T00:57:43.1984515Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:57:43.1986619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:57:43.1989930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:57:43.1993102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-05T00:57:43.1994324Z         	Error:      	Received unexpected error:
2026-05-05T00:57:43.1997657Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.1998906Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-05T00:57:43.2000689Z         	Messages:   	Project creation failed: test-acc-tf-p-8125845251712968121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.2001905Z --- FAIL: TestAccMaintenanceWindowAPI_basic (105.24s)
```

- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 11 seconds
  - PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 14 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04 PASS 12 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
