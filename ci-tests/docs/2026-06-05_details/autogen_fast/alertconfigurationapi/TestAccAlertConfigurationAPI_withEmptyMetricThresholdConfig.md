# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 9)
Success rate: 70.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-05-16 00:58](#error-2026-05-16t0058270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.06s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-05-26 02:14](#error-2026-05-26t0214390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 6 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2590748Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-09T01:07:49.2591464Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-1153825418454692636
2026-05-09T01:07:49.2591998Z     resource_test.go:66: 
2026-05-09T01:07:49.2592978Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2594887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2596802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2599126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-09T01:07:49.2600098Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2602142Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2603380Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-09T01:07:49.2605342Z         	Messages:   	Project creation failed: test-acc-tf-p-1153825418454692636, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2607318Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (62.81s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 6 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14 PASS 5 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4776498Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-16T00:58:27.4777748Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-4151069248812038079
2026-05-16T00:58:27.4778699Z     resource_test.go:66: 
2026-05-16T00:58:27.4780368Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4783766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4787009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4790663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-16T00:58:27.4792252Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4796339Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4798452Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-16T00:58:27.4801769Z         	Messages:   	Project creation failed: test-acc-tf-p-4151069248812038079, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4804266Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (69.54s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4310605Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-19T01:08:18.4311321Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-4201618754353593341
2026-05-19T01:08:18.4311857Z     resource_test.go:66: 
2026-05-19T01:08:18.4312829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4314988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4316862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4318945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-19T01:08:18.4319843Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4321899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4323136Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-19T01:08:18.4325684Z         	Messages:   	Project creation failed: test-acc-tf-p-4201618754353593341, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4327033Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (103.61s)
```

- 2026-05-20 PASS 5 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7796467Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-21T01:09:19.7798255Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-3460871243719073370
2026-05-21T01:09:19.7799190Z     resource_test.go:66: 
2026-05-21T01:09:19.7800936Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7804376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7808128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7811933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-21T01:09:19.7813566Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7817855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7820051Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-21T01:09:19.7823514Z         	Messages:   	Project creation failed: test-acc-tf-p-3460871243719073370, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7825911Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (64.76s)
```

- 2026-05-22 PASS 6 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.4972132Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-23T01:05:26.4973272Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-6663419384927336204
2026-05-23T01:05:26.4973953Z     resource_test.go:66: 
2026-05-23T01:05:26.4975237Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:26.4977423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:26.4979651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:26.4982977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-23T01:05:26.4984149Z         	Error:      	Received unexpected error:
2026-05-23T01:05:26.4987427Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.4989646Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-23T01:05:26.4993536Z         	Messages:   	Project creation failed: test-acc-tf-p-6663419384927336204, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.4995184Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (62.49s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26

### Error 2026-05-26T02:14:39+00:00
```
2026-05-26T02:14:39.4067200Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-26T02:14:39.4067972Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-2050385973482552855
2026-05-26T02:14:39.4068509Z     resource_test.go:66: 
2026-05-26T02:14:39.4069555Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:39.4072127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:39.4075166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:39.4077552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-26T02:14:39.4079141Z         	Error:      	Received unexpected error:
2026-05-26T02:14:39.4081572Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4083247Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-26T02:14:39.4085361Z         	Messages:   	Project creation failed: test-acc-tf-p-2050385973482552855, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4086803Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (69.50s)
```

- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6729492Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-28T01:01:18.6730166Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-3941110915009367451
2026-05-28T01:01:18.6731060Z     resource_test.go:66: 
2026-05-28T01:01:18.6731955Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6734331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6736714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6738497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-28T01:01:18.6739316Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6741306Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6742733Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-28T01:01:18.6744415Z         	Messages:   	Project creation failed: test-acc-tf-p-3941110915009367451, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6745633Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (63.02s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4021505Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-30T01:10:40.4022251Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-148162342831243846
2026-05-30T01:10:40.4022808Z     resource_test.go:66: 
2026-05-30T01:10:40.4023999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4025885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4027738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4029823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-05-30T01:10:40.4030734Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4032765Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4034145Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-05-30T01:10:40.4036362Z         	Messages:   	Project creation failed: test-acc-tf-p-148162342831243846, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4037664Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (62.73s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0284614Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-06-02T01:15:50.0285656Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-5712690738667918857
2026-06-02T01:15:50.0286493Z     resource_test.go:66: 
2026-06-02T01:15:50.0287828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0289941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0292006Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0294501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-06-02T01:15:50.0295639Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0297956Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0299439Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-06-02T01:15:50.0301562Z         	Messages:   	Project creation failed: test-acc-tf-p-5712690738667918857, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0303305Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (105.04s)
```

- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
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
- 2026-05-31 PASS 5 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
