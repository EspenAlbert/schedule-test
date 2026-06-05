# autogen_fast/logintegration/TestAccLogIntegration_basicS3 Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 9)
Success rate: 70.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-05-16 00:58](#error-2026-05-16t0058270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.00s
[2026-05-21 01:09](#error-2026-05-21t0109210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-05-23 01:09](#error-2026-05-23t0109250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.09s
[2026-05-26 02:15](#error-2026-05-26t0215540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 112.00s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2758569Z === RUN   TestAccLogIntegration_basicS3
2026-05-09T01:07:49.2759334Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-4835591776758840953
2026-05-09T01:07:49.2760067Z     resource_test.go:73: 
2026-05-09T01:07:49.2774306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2778334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2781759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2785399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-09T01:07:49.2786896Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2790742Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2795754Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-09T01:07:49.2799540Z         	Messages:   	Project creation failed: test-acc-tf-p-4835591776758840953, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2801869Z --- FAIL: TestAccLogIntegration_basicS3 (63.68s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4863327Z === RUN   TestAccLogIntegration_basicS3
2026-05-16T00:58:27.4864361Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-5803365022712593618
2026-05-16T00:58:27.4865217Z     resource_test.go:73: 
2026-05-16T00:58:27.4866106Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4867749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4869417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4871139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-16T00:58:27.4871935Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4873781Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4874778Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-16T00:58:27.4876357Z         	Messages:   	Project creation failed: test-acc-tf-p-5803365022712593618, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4877480Z --- FAIL: TestAccLogIntegration_basicS3 (68.92s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4419707Z === RUN   TestAccLogIntegration_basicS3
2026-05-19T01:08:18.4420335Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-5508435241406973431
2026-05-19T01:08:18.4420871Z     resource_test.go:73: 
2026-05-19T01:08:18.4421841Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4423983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4425890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4427877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-19T01:08:18.4428741Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4430755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4431833Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-19T01:08:18.4433761Z         	Messages:   	Project creation failed: test-acc-tf-p-5508435241406973431, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4434996Z --- FAIL: TestAccLogIntegration_basicS3 (76.00s)
```

- 2026-05-20 PASS a minute
- 2026-05-21

### Error 2026-05-21T01:09:21+00:00
```
2026-05-21T01:09:21.2464349Z === RUN   TestAccLogIntegration_basicS3
2026-05-21T01:09:21.2465072Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-56937702834696400
2026-05-21T01:09:21.2465619Z     resource_test.go:73: 
2026-05-21T01:09:21.2466607Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:21.2469050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:21.2470908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:21.2472840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-21T01:09:21.2473687Z         	Error:      	Received unexpected error:
2026-05-21T01:09:21.2475665Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2476732Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-21T01:09:21.2479139Z         	Messages:   	Project creation failed: test-acc-tf-p-56937702834696400, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2480384Z --- FAIL: TestAccLogIntegration_basicS3 (70.75s)
```

- 2026-05-22 PASS a minute
- 2026-05-23

### Error 2026-05-23T01:09:25+00:00
```
2026-05-23T01:09:25.6734106Z === RUN   TestAccLogIntegration_basicS3
2026-05-23T01:09:25.6735685Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-6168400365029994068
2026-05-23T01:09:25.6736504Z     resource_test.go:73: 
2026-05-23T01:09:25.6737820Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:09:25.6740402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:09:25.6743519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:09:25.6746268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-23T01:09:25.6747446Z         	Error:      	Received unexpected error:
2026-05-23T01:09:25.6749471Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:09:25.6750594Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-23T01:09:25.6752641Z         	Messages:   	Project creation failed: test-acc-tf-p-6168400365029994068, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:09:25.6753916Z --- FAIL: TestAccLogIntegration_basicS3 (82.93s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26

### Error 2026-05-26T02:15:54+00:00
```
2026-05-26T02:15:54.1786108Z === RUN   TestAccLogIntegration_basicS3
2026-05-26T02:15:54.1786815Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-5700018189776250116
2026-05-26T02:15:54.1787650Z     resource_test.go:73: 
2026-05-26T02:15:54.1788707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:54.1790402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:54.1792089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:54.1793849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-26T02:15:54.1794901Z         	Error:      	Received unexpected error:
2026-05-26T02:15:54.1796795Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1797936Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-26T02:15:54.1799593Z         	Messages:   	Project creation failed: test-acc-tf-p-5700018189776250116, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1800742Z --- FAIL: TestAccLogIntegration_basicS3 (62.10s)
```

- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6927227Z === RUN   TestAccLogIntegration_basicS3
2026-05-28T01:01:18.6927783Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-6424675799376515662
2026-05-28T01:01:18.6928274Z     resource_test.go:73: 
2026-05-28T01:01:18.6929144Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6930928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6932684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6934409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-28T01:01:18.6935190Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6937018Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6937979Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-28T01:01:18.6939569Z         	Messages:   	Project creation failed: test-acc-tf-p-6424675799376515662, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6940743Z --- FAIL: TestAccLogIntegration_basicS3 (62.61s)
```

- 2026-05-29 PASS a minute
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4167468Z === RUN   TestAccLogIntegration_basicS3
2026-05-30T01:10:40.4168106Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-127603310424944877
2026-05-30T01:10:40.4168664Z     resource_test.go:73: 
2026-05-30T01:10:40.4169645Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4171491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4173468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4175443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-05-30T01:10:40.4176319Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4178345Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4179400Z         	Test:       	TestAccLogIntegration_basicS3
2026-05-30T01:10:40.4181193Z         	Messages:   	Project creation failed: test-acc-tf-p-127603310424944877, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4182375Z --- FAIL: TestAccLogIntegration_basicS3 (112.05s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0433396Z === RUN   TestAccLogIntegration_basicS3
2026-06-02T01:15:50.0434207Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-7744266596840384162
2026-06-02T01:15:50.0434789Z     resource_test.go:73: 
2026-06-02T01:15:50.0435753Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0437574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0439395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0441312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:73
2026-06-02T01:15:50.0442196Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0444429Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0445670Z         	Test:       	TestAccLogIntegration_basicS3
2026-06-02T01:15:50.0447484Z         	Messages:   	Project creation failed: test-acc-tf-p-7744266596840384162, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0448691Z --- FAIL: TestAccLogIntegration_basicS3 (75.14s)
```

- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

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
