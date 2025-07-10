# config/alertconfiguration/TestAccConfigRSAlertConfiguration_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029440000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 26 seconds
- 2025-04-13 PASS 19 seconds
- 2025-04-14 PASS 29 seconds
- 2025-04-15 PASS 19 seconds
- 2025-04-16
  - PASS 19 seconds
  - PASS 31 seconds
- 2025-04-17 PASS 19 seconds
- 2025-04-18 PASS 28 seconds
- 2025-04-19 PASS 21 seconds
- 2025-04-20 PASS 19 seconds
- 2025-04-21 PASS 20 seconds
- 2025-04-22 PASS 20 seconds
- 2025-04-23 PASS 19 seconds
- 2025-04-24 PASS 21 seconds
- 2025-04-25 PASS 17 seconds
- 2025-04-26 PASS 16 seconds
- 2025-04-27 PASS 17 seconds
- 2025-04-28 PASS 17 seconds
- 2025-04-29 PASS 18 seconds
- 2025-04-30
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-05-01
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 27 seconds
  - PASS 17 seconds
  - PASS 29 seconds
- 2025-05-02 PASS 17 seconds
- 2025-05-03 PASS 17 seconds
- 2025-05-04 PASS 17 seconds
- 2025-05-05 PASS 17 seconds
- 2025-05-06 PASS 17 seconds
- 2025-05-07 PASS 17 seconds
- 2025-05-08 PASS 18 seconds
- 2025-05-09 PASS 17 seconds
- 2025-05-10 PASS 17 seconds
- 2025-05-11

### Error 2025-05-11T00:29:44+00:00
```
2025-05-11T00:29:44.7808211Z === RUN   TestAccConfigRSAlertConfiguration_basic
2025-05-11T00:29:44.7809390Z     resource_test.go:28: Creating execution project: test-acc-tf-p-4779835851198016925
2025-05-11T00:29:44.7810394Z     resource_test.go:28: 
2025-05-11T00:29:44.7812311Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:44.7816290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:44.7820232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2025-05-11T00:29:44.7822057Z         	Error:      	Received unexpected error:
2025-05-11T00:29:44.7823802Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.7825080Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2025-05-11T00:29:44.7827119Z         	Messages:   	Project creation failed: test-acc-tf-p-4779835851198016925, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.7828576Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (0.01s)
```

- 2025-05-12 PASS 16 seconds
- 2025-05-13
  - PASS 18 seconds
  - PASS 17 seconds
- 2025-05-14 PASS 16 seconds
- 2025-05-15 PASS 17 seconds
- 2025-05-16 PASS 16 seconds
- 2025-05-17 PASS 15 seconds
- 2025-05-18 PASS 16 seconds
- 2025-05-19 PASS 17 seconds
- 2025-05-20 PASS 16 seconds
- 2025-05-21 PASS 16 seconds
- 2025-05-22 PASS 17 seconds
- 2025-05-23 PASS 16 seconds
- 2025-05-24 PASS 17 seconds
- 2025-05-25 PASS 16 seconds
- 2025-05-26 PASS 16 seconds
- 2025-05-27 PASS 17 seconds
- 2025-05-28
  - PASS 18 seconds
  - PASS 17 seconds
  - PASS 16 seconds
- 2025-05-29 PASS 17 seconds
- 2025-05-30 PASS 18 seconds
- 2025-05-31 PASS 17 seconds
- 2025-06-01
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 19 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 16 seconds
- 2025-06-02
  - PASS 17 seconds
  - PASS 25 seconds
  - PASS 20 seconds
- 2025-06-03 PASS 17 seconds
- 2025-06-04 PASS 17 seconds
- 2025-06-05 PASS 30 seconds
- 2025-06-06 PASS 16 seconds
- 2025-06-07 PASS 18 seconds
- 2025-06-08 PASS 16 seconds
- 2025-06-09 PASS 16 seconds
- 2025-06-10 PASS 18 seconds
- 2025-06-11
  - PASS 18 seconds
  - PASS 18 seconds
- 2025-06-12 PASS 17 seconds
- 2025-06-13 PASS 16 seconds
- 2025-06-14 PASS 17 seconds
- 2025-06-15 PASS 16 seconds
- 2025-06-16 PASS 18 seconds
- 2025-06-17 PASS 18 seconds
- 2025-06-18
  - PASS 18 seconds
  - PASS 17 seconds
- 2025-06-19 PASS 17 seconds
- 2025-06-20 PASS 19 seconds
- 2025-06-21 PASS 25 seconds
- 2025-06-22 PASS 14 seconds
- 2025-06-23 PASS 18 seconds
- 2025-06-24 PASS 16 seconds
- 2025-06-25 PASS 16 seconds
- 2025-06-26 PASS 17 seconds
- 2025-06-27 PASS 18 seconds
- 2025-06-28 PASS 16 seconds
- 2025-06-29 PASS 20 seconds
- 2025-06-30 PASS 17 seconds
- 2025-07-01
  - PASS 17 seconds
  - PASS 18 seconds
  - PASS 18 seconds
  - PASS 17 seconds
  - PASS 19 seconds
  - PASS 25 seconds
- 2025-07-02 PASS 18 seconds
- 2025-07-03 PASS 17 seconds
- 2025-07-04 PASS 17 seconds
- 2025-07-05 PASS 18 seconds
- 2025-07-06 PASS 14 seconds
- 2025-07-07 PASS 17 seconds
- 2025-07-08 PASS 18 seconds
- 2025-07-09 PASS 17 seconds
- 2025-07-10 PASS 16 seconds