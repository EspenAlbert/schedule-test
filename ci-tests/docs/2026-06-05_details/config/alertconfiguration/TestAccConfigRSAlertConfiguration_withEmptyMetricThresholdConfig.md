# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.07s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-05-08 PASS 17 seconds
- 2026-05-09 PASS 6 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 10 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16 PASS 6 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8517654Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-05-19T01:08:20.8519056Z     resource_test.go:118: Creating execution project (1): test-acc-tf-p-6382967542093112783
2026-05-19T01:08:20.8520079Z     resource_test.go:118: 
2026-05-19T01:08:20.8521857Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:20.8525515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:20.8529240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:20.8533292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:118
2026-05-19T01:08:20.8536000Z         	Error:      	Received unexpected error:
2026-05-19T01:08:20.8541065Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8543529Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-05-19T01:08:20.8547895Z         	Messages:   	Project creation failed: test-acc-tf-p-6382967542093112783, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8550726Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (77.74s)
```

- 2026-05-20 PASS 12 seconds
- 2026-05-21 PASS 9 seconds
- 2026-05-22 PASS 12 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 6 seconds
- 2026-05-27 PASS 16 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.6987448Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-05-28T01:01:56.6988134Z     resource_test.go:118: Creating execution project (1): test-acc-tf-p-6537153070478060327
2026-05-28T01:01:56.6988628Z     resource_test.go:118: 
2026-05-28T01:01:56.6989538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.6991572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.6993383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.6995301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:118
2026-05-28T01:01:56.6996120Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.6998146Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.6999338Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-05-28T01:01:56.7001479Z         	Messages:   	Project creation failed: test-acc-tf-p-6537153070478060327, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7002987Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (91.00s)
```

- 2026-05-29 PASS 18 seconds
- 2026-05-30 PASS 7 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 18 seconds
- 2026-06-02 PASS 8 seconds
- 2026-06-03 PASS 13 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
