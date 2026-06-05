# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.08s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.04s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.07s
[2026-05-26 02:14](#error-2026-05-26t0214390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.03s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 5 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2608221Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-09T01:07:49.2609155Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-6018845368254748373
2026-05-09T01:07:49.2609708Z     resource_test.go:88: 
2026-05-09T01:07:49.2610695Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2612624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2614547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2616636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-09T01:07:49.2617771Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2619851Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2621130Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-09T01:07:49.2623146Z         	Messages:   	Project creation failed: test-acc-tf-p-6018845368254748373, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2624543Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (66.33s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 5 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14 PASS 6 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4327682Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-19T01:08:18.4328601Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-1873142912963509045
2026-05-19T01:08:18.4329154Z     resource_test.go:88: 
2026-05-19T01:08:18.4330118Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4331981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4334107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4336154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-19T01:08:18.4337051Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4339065Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4340329Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-19T01:08:18.4342320Z         	Messages:   	Project creation failed: test-acc-tf-p-1873142912963509045, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4343993Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (78.82s)
```

- 2026-05-20 PASS 4 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7827036Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-21T01:09:19.7829048Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-4229293896525357995
2026-05-21T01:09:19.7829999Z     resource_test.go:88: 
2026-05-21T01:09:19.7831648Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7835048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7838783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7842514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-21T01:09:19.7844086Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7847919Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7850177Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-21T01:09:19.7853667Z         	Messages:   	Project creation failed: test-acc-tf-p-4229293896525357995, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7856112Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (87.36s)
```

- 2026-05-22 PASS 6 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.4996159Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-23T01:05:26.4998014Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-9125064141138275481
2026-05-23T01:05:26.4999022Z     resource_test.go:88: 
2026-05-23T01:05:26.5000880Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:26.5004864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:26.5008588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:26.5011295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-23T01:05:26.5012727Z         	Error:      	Received unexpected error:
2026-05-23T01:05:26.5016706Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5019061Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-23T01:05:26.5022938Z         	Messages:   	Project creation failed: test-acc-tf-p-9125064141138275481, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5025512Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (95.73s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26

### Error 2026-05-26T02:14:39+00:00
```
2026-05-26T02:14:39.4087492Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-26T02:14:39.4088503Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-7019884635142130565
2026-05-26T02:14:39.4089275Z     resource_test.go:88: 
2026-05-26T02:14:39.4090598Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:39.4092501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:39.4094630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:39.4096758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-26T02:14:39.4097716Z         	Error:      	Received unexpected error:
2026-05-26T02:14:39.4099789Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4101084Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-26T02:14:39.4103154Z         	Messages:   	Project creation failed: test-acc-tf-p-7019884635142130565, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4104782Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (80.26s)
```

- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6746234Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-28T01:01:18.6747027Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-4174657588127831532
2026-05-28T01:01:18.6747521Z     resource_test.go:88: 
2026-05-28T01:01:18.6748374Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6750034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6751835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6753621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-28T01:01:18.6754540Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6756283Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6757409Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-28T01:01:18.6759117Z         	Messages:   	Project creation failed: test-acc-tf-p-4174657588127831532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6760459Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (62.54s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4038330Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-30T01:10:40.4039240Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-520701969666143034
2026-05-30T01:10:40.4039807Z     resource_test.go:88: 
2026-05-30T01:10:40.4040788Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4042642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4044900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4046967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-05-30T01:10:40.4047891Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4049952Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4051220Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-05-30T01:10:40.4053290Z         	Messages:   	Project creation failed: test-acc-tf-p-520701969666143034, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4054686Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (61.41s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0304424Z === RUN   TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-06-02T01:15:50.0305769Z     resource_test.go:88: Creating execution project (1): test-acc-tf-p-779585017968847973
2026-06-02T01:15:50.0306813Z     resource_test.go:88: 
2026-06-02T01:15:50.0308037Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0310115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0312235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0314696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:88
2026-06-02T01:15:50.0315908Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0318212Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0319742Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig
2026-06-02T01:15:50.0321942Z         	Messages:   	Project creation failed: test-acc-tf-p-779585017968847973, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0323586Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMatcherMetricThresholdConfig (63.15s)
```

- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
