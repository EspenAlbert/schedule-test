# config/alertconfiguration/TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.03s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 seconds
  - PASS 12 seconds
- 2026-05-08 PASS 25 seconds
- 2026-05-09 PASS 11 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 19 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 16 seconds
- 2026-05-14 PASS 13 seconds
- 2026-05-15 PASS 16 seconds
- 2026-05-16 PASS 11 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 15 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8478008Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-05-19T01:08:20.8479608Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-2394588067194848705
2026-05-19T01:08:20.8480676Z     resource_test.go:85: 
2026-05-19T01:08:20.8485630Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:20.8489811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:20.8493567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:20.8497814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-05-19T01:08:20.8502674Z         	Error:      	Received unexpected error:
2026-05-19T01:08:20.8507026Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8509274Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-05-19T01:08:20.8513011Z         	Messages:   	Project creation failed: test-acc-tf-p-2394588067194848705, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8516317Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (82.28s)
```

- 2026-05-20 PASS 16 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 15 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26 PASS 11 seconds
- 2026-05-27 PASS 25 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.6968863Z === RUN   TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-05-28T01:01:56.6969609Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-1734729800012612597
2026-05-28T01:01:56.6970102Z     resource_test.go:85: 
2026-05-28T01:01:56.6971359Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.6974354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.6976829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.6978765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-05-28T01:01:56.6979583Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.6982243Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.6983507Z         	Test:       	TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold
2026-05-28T01:01:56.6985445Z         	Messages:   	Project creation failed: test-acc-tf-p-1734729800012612597, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.6986807Z --- FAIL: TestAccConfigRSAlertConfiguration_outsideStreamProcessorMetricThreshold (105.18s)
```

- 2026-05-29 PASS 27 seconds
- 2026-05-30 PASS 11 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 23 seconds
- 2026-06-02 PASS 57 seconds
- 2026-06-03 PASS 26 seconds
- 2026-06-04 PASS 13 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 26 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 26 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
