# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-14 00:50](#error-2026-04-14t0050490000) |  | dev |  | 8.08s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 seconds
- 2026-04-08 PASS 21 seconds
- 2026-04-09 PASS 12 seconds
- 2026-04-10 PASS 11 seconds
- 2026-04-11 PASS 8 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 22 seconds
- 2026-04-14

### Error 2026-04-14T00:50:49+00:00
```
2026-04-14T00:50:49.7963499Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-04-14T00:50:49.8029928Z === CONT  TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-04-14T00:50:49.8060606Z === NAME  TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-04-14T00:50:49.8061698Z     resource_test.go:105: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-14T00:50:49.8062192Z         
2026-04-14T00:50:49.8062598Z         Error: error getting Alert Configuration information: %s
2026-04-14T00:50:49.8062954Z         
2026-04-14T00:50:49.8063649Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dd8f197e7703c9cb107cfa/alertConfigs/69dd8f41dcb6e3417a34d8a9
2026-04-14T00:50:49.8064458Z         DELETE: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-04-14T00:50:49.8064906Z         BadRequestDetail: 
2026-04-14T00:50:49.8065375Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (8.80s)
```

- 2026-04-15 PASS 11 seconds
- 2026-04-16 PASS 6 seconds
- 2026-04-17 PASS 12 seconds
- 2026-04-18 PASS 8 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 11 seconds
- 2026-04-21 PASS 8 seconds
- 2026-04-22 PASS 17 seconds
- 2026-04-23 PASS 7 seconds
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 8 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 seconds
- 2026-04-28 PASS 9 seconds
- 2026-04-29 PASS 12 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.6652146Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-04-30T01:01:13.6653847Z     resource_test.go:102: Creating execution project (1): test-acc-tf-p-6973696300516332903
2026-04-30T01:01:13.6654900Z     resource_test.go:102: 
2026-04-30T01:01:13.6657188Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.6660766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.6663900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.6667379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:102
2026-04-30T01:01:13.6668927Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.6672559Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6674906Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig
2026-04-30T01:01:13.6678161Z         	Messages:   	Project creation failed: test-acc-tf-p-6973696300516332903, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6681120Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMatcherMetricThresholdConfig (62.85s)
```

- 2026-05-01 PASS 20 seconds
- 2026-05-02 PASS 10 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 seconds
- 2026-05-05 PASS 9 seconds
- 2026-05-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 16 seconds
  - PASS 17 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 seconds
- 2026-05-04 PASS 19 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
