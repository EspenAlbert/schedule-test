# config/thirdpartyintegration/TestAccThirdPartyIntegration_microsoftTeams Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030140000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 seconds
- 2025-04-13 PASS 4 seconds
- 2025-04-14 PASS 4 seconds
- 2025-04-15 PASS 4 seconds
- 2025-04-16
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-04-17 PASS 4 seconds
- 2025-04-18 PASS 4 seconds
- 2025-04-19 PASS 5 seconds
- 2025-04-20 PASS 4 seconds
- 2025-04-21 PASS 7 seconds
- 2025-04-22 PASS 5 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 6 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 6 seconds
- 2025-04-27 PASS 7 seconds
- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 4 seconds
- 2025-04-30
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-05-01
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 4 seconds
- 2025-05-04 PASS 4 seconds
- 2025-05-05 PASS 6 seconds
- 2025-05-06 PASS 4 seconds
- 2025-05-07 PASS 5 seconds
- 2025-05-08 PASS 4 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 4 seconds
- 2025-05-11

### Error 2025-05-11T00:30:14+00:00
```
2025-05-11T00:30:14.4797566Z === RUN   TestAccThirdPartyIntegration_microsoftTeams
2025-05-11T00:30:14.4798220Z     resource_third_party_integration_test.go:46: Creating execution project: test-acc-tf-p-1553127993549587359
2025-05-11T00:30:14.4798925Z     resource_third_party_integration_test.go:46: 
2025-05-11T00:30:14.4799882Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:14.4801839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:14.4804022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_third_party_integration_test.go:284
2025-05-11T00:30:14.4806323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_third_party_integration_test.go:46
2025-05-11T00:30:14.4807231Z         	Error:      	Received unexpected error:
2025-05-11T00:30:14.4808123Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4808745Z         	Test:       	TestAccThirdPartyIntegration_microsoftTeams
2025-05-11T00:30:14.4809817Z         	Messages:   	Project creation failed: test-acc-tf-p-1553127993549587359, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4810560Z --- FAIL: TestAccThirdPartyIntegration_microsoftTeams (0.01s)
```

- 2025-05-12 PASS 4 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 5 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 4 seconds
- 2025-05-18 PASS 5 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 4 seconds
- 2025-05-21 PASS 4 seconds
- 2025-05-22 PASS 4 seconds
- 2025-05-23 PASS 4 seconds
- 2025-05-24 PASS 4 seconds
- 2025-05-25 PASS 4 seconds
- 2025-05-26 PASS 5 seconds
- 2025-05-27 PASS 4 seconds
- 2025-05-28
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-29 PASS 4 seconds
- 2025-05-30 PASS 5 seconds
- 2025-05-31 PASS 6 seconds
- 2025-06-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-06-03 PASS 5 seconds
- 2025-06-04 PASS 5 seconds
- 2025-06-05 PASS 6 seconds
- 2025-06-06 PASS 4 seconds
- 2025-06-07 PASS 6 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 4 seconds
- 2025-06-10 PASS 7 seconds
- 2025-06-11
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-12 PASS 4 seconds
- 2025-06-13 PASS 4 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-19 PASS 4 seconds
- 2025-06-20 PASS 7 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22 PASS 4 seconds
- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 4 seconds
- 2025-06-25 PASS 4 seconds
- 2025-06-26 PASS 5 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 4 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 7 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 4 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10 PASS 4 seconds