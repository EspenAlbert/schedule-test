# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withMatchers Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.00s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.08s
[2026-05-28 01:01](#error-2026-05-28t0101180000) |  | dev | flaky_500 | 43.01s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 9 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2625123Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-05-09T01:07:49.2625776Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-1484044973934627530
2026-05-09T01:07:49.2626305Z     resource_test.go:110: 
2026-05-09T01:07:49.2627288Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2629436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2631360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2633453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-05-09T01:07:49.2634363Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2636418Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2637763Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-05-09T01:07:49.2639668Z         	Messages:   	Project creation failed: test-acc-tf-p-1484044973934627530, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2640942Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (63.30s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 10 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4344587Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-05-19T01:08:18.4345244Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-4230331391544758270
2026-05-19T01:08:18.4345784Z     resource_test.go:110: 
2026-05-19T01:08:18.4346756Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4348626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4350493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4352543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-05-19T01:08:18.4353440Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4355728Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4356854Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-05-19T01:08:18.4358707Z         	Messages:   	Project creation failed: test-acc-tf-p-4230331391544758270, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4360142Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (102.05s)
```

- 2026-05-20 PASS 9 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7857102Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-05-21T01:09:19.7860112Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-2349850196474961811
2026-05-21T01:09:19.7861407Z     resource_test.go:110: 
2026-05-21T01:09:19.7863505Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7869748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7873161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7876984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-05-21T01:09:19.7878833Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7882630Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7884753Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-05-21T01:09:19.7888875Z         	Messages:   	Project creation failed: test-acc-tf-p-2349850196474961811, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7891226Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (103.80s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23 PASS 26 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6761001Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-05-28T01:01:18.6761599Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-6618994622774423128
2026-05-28T01:01:18.6762100Z     resource_test.go:110: 
2026-05-28T01:01:18.6762969Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6764649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6766264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6768043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-05-28T01:01:18.6768843Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6769726Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:18.6770607Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-05-28T01:01:18.6771627Z         	Messages:   	Project creation failed: test-acc-tf-p-6618994622774423128, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:18.6772396Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (43.06s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4055296Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-05-30T01:10:40.4055995Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-4772547883393919545
2026-05-30T01:10:40.4056566Z     resource_test.go:110: 
2026-05-30T01:10:40.4057638Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4059743Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4061926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4064476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-05-30T01:10:40.4065683Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4082508Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4084326Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-05-30T01:10:40.4086242Z         	Messages:   	Project creation failed: test-acc-tf-p-4772547883393919545, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4087858Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (75.01s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0324582Z === RUN   TestAccAlertConfigurationAPI_withMatchers
2026-06-02T01:15:50.0325531Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-6446897958439908132
2026-06-02T01:15:50.0326323Z     resource_test.go:110: 
2026-06-02T01:15:50.0327585Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0329670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0331753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0334159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:110
2026-06-02T01:15:50.0335289Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0337556Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0338994Z         	Test:       	TestAccAlertConfigurationAPI_withMatchers
2026-06-02T01:15:50.0341055Z         	Messages:   	Project creation failed: test-acc-tf-p-6446897958439908132, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0342586Z --- FAIL: TestAccAlertConfigurationAPI_withMatchers (62.20s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 9 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 9 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
