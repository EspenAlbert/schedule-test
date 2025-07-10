# config/thirdpartyintegration/TestMigThirdPartyIntegration_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030140000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 9 seconds
- 2025-04-13 PASS 8 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 9 seconds
- 2025-04-16
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 7 seconds
- 2025-04-19 PASS 8 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 10 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 10 seconds
- 2025-04-26 PASS 9 seconds
- 2025-04-27 PASS 11 seconds
- 2025-04-28 PASS 10 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 15 seconds
- 2025-05-02 PASS 11 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 8 seconds
- 2025-05-05 PASS 11 seconds
- 2025-05-06 PASS 9 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 10 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:30:14+00:00
```
2025-05-11T00:30:14.4717126Z === RUN   TestMigThirdPartyIntegration_basic
2025-05-11T00:30:14.4717824Z     resource_third_party_integration_migration_test.go:11: Creating execution project: test-acc-tf-p-3616879204690948527
2025-05-11T00:30:14.4718480Z     resource_third_party_integration_migration_test.go:11: 
2025-05-11T00:30:14.4719583Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:14.4721371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:14.4723677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_third_party_integration_test.go:56
2025-05-11T00:30:14.4726077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_third_party_integration_migration_test.go:11
2025-05-11T00:30:14.4727011Z         	Error:      	Received unexpected error:
2025-05-11T00:30:14.4727910Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4728487Z         	Test:       	TestMigThirdPartyIntegration_basic
2025-05-11T00:30:14.4729539Z         	Messages:   	Project creation failed: test-acc-tf-p-3616879204690948527, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4730251Z --- FAIL: TestMigThirdPartyIntegration_basic (0.03s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 8 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 11 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 11 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 8 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 7 seconds
- 2025-05-23 PASS 7 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27 PASS 9 seconds
- 2025-05-28
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-29 PASS 9 seconds
- 2025-05-30 PASS 10 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 15 seconds
- 2025-06-03 PASS 9 seconds
- 2025-06-04 PASS 9 seconds
- 2025-06-05 PASS 13 seconds
- 2025-06-06 PASS 7 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 7 seconds
- 2025-06-09 PASS 9 seconds
- 2025-06-10 PASS 10 seconds
- 2025-06-11
  - PASS 11 seconds
  - PASS 8 seconds
- 2025-06-12 PASS 7 seconds
- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 8 seconds
- 2025-06-15 PASS 7 seconds
- 2025-06-16 PASS 11 seconds
- 2025-06-17 PASS 16 seconds
- 2025-06-18
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 11 seconds
- 2025-06-21 PASS 10 seconds
- 2025-06-22 PASS 7 seconds
- 2025-06-23 PASS 10 seconds
- 2025-06-24 PASS 8 seconds
- 2025-06-25 PASS 8 seconds
- 2025-06-26 PASS 8 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 10 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10 PASS 7 seconds