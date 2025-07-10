# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withoutRoles Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029440000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 seconds
- 2025-04-13 PASS 12 seconds
- 2025-04-14 PASS 13 seconds
- 2025-04-15 PASS 11 seconds
- 2025-04-16
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-04-17 PASS 12 seconds
- 2025-04-18 PASS 13 seconds
- 2025-04-19 PASS 12 seconds
- 2025-04-20 PASS 12 seconds
- 2025-04-21 PASS 11 seconds
- 2025-04-22 PASS 13 seconds
- 2025-04-23 PASS 12 seconds
- 2025-04-24 PASS 12 seconds
- 2025-04-25 PASS 10 seconds
- 2025-04-26 PASS 8 seconds
- 2025-04-27 PASS 9 seconds
- 2025-04-28 PASS 9 seconds
- 2025-04-29 PASS 10 seconds
- 2025-04-30
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-05-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-05-02 PASS 9 seconds
- 2025-05-03 PASS 9 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 9 seconds
- 2025-05-06 PASS 9 seconds
- 2025-05-07 PASS 10 seconds
- 2025-05-08 PASS 11 seconds
- 2025-05-09 PASS 9 seconds
- 2025-05-10 PASS 10 seconds
- 2025-05-11

### Error 2025-05-11T00:29:44+00:00
```
2025-05-11T00:29:44.7938454Z === RUN   TestAccConfigRSAlertConfiguration_withoutRoles
2025-05-11T00:29:44.7939067Z     resource_test.go:270: Creating execution project: test-acc-tf-p-520701533937251319
2025-05-11T00:29:44.7939540Z     resource_test.go:270: 
2025-05-11T00:29:44.7940464Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:44.7943856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:44.7946607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:270
2025-05-11T00:29:44.7947435Z         	Error:      	Received unexpected error:
2025-05-11T00:29:44.7948343Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.7948988Z         	Test:       	TestAccConfigRSAlertConfiguration_withoutRoles
2025-05-11T00:29:44.7950229Z         	Messages:   	Project creation failed: test-acc-tf-p-520701533937251319, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.7950995Z --- FAIL: TestAccConfigRSAlertConfiguration_withoutRoles (0.00s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 9 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 9 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 9 seconds
- 2025-05-21 PASS 9 seconds
- 2025-05-22 PASS 9 seconds
- 2025-05-23 PASS 9 seconds
- 2025-05-24 PASS 9 seconds
- 2025-05-25 PASS 10 seconds
- 2025-05-26 PASS 9 seconds
- 2025-05-27 PASS 10 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-05-29 PASS 10 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 9 seconds
- 2025-06-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-06-03 PASS 9 seconds
- 2025-06-04 PASS 10 seconds
- 2025-06-05 PASS 18 seconds
- 2025-06-06 PASS 9 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 10 seconds
- 2025-06-09 PASS 9 seconds
- 2025-06-10 PASS 10 seconds
- 2025-06-11
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 10 seconds
- 2025-06-13 PASS 9 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 10 seconds
- 2025-06-16 PASS 9 seconds
- 2025-06-17 PASS 9 seconds
- 2025-06-18
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 10 seconds
- 2025-06-20 PASS 10 seconds
- 2025-06-21 PASS 10 seconds
- 2025-06-22 PASS 8 seconds
- 2025-06-23 PASS 9 seconds
- 2025-06-24 PASS 9 seconds
- 2025-06-25 PASS 8 seconds
- 2025-06-26 PASS 9 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 9 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 9 seconds
- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10 PASS 9 seconds