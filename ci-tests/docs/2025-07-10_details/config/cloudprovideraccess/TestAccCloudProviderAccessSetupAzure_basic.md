# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAzure_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 seconds
- 2025-04-13 PASS 3 seconds
- 2025-04-14 PASS 3 seconds
- 2025-04-15 PASS 2 seconds
- 2025-04-16
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-04-17 PASS 4 seconds
- 2025-04-18 PASS 2 seconds
- 2025-04-19 PASS 2 seconds
- 2025-04-20 PASS 5 seconds
- 2025-04-21 PASS 3 seconds
- 2025-04-22 PASS 21 seconds
- 2025-04-23 PASS 2 seconds
- 2025-04-24 PASS 2 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 3 seconds
- 2025-04-29 PASS 2 seconds
- 2025-04-30
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-05-01
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-02 PASS 3 seconds
- 2025-05-03 PASS 4 seconds
- 2025-05-04 PASS 2 seconds
- 2025-05-05 PASS 5 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 2 seconds
- 2025-05-08 PASS 2 seconds
- 2025-05-09 PASS 4 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.3779272Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2025-05-11T00:29:47.3780465Z     resource_cloud_provider_access_setup_test.go:27: Creating execution project: test-acc-tf-p-6193428438685314059
2025-05-11T00:29:47.3781671Z     resource_cloud_provider_access_setup_test.go:27: 
2025-05-11T00:29:47.3783318Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.3786377Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.3790101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:27
2025-05-11T00:29:47.3791788Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.3793467Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.3794454Z         	Test:       	TestAccCloudProviderAccessSetupAzure_basic
2025-05-11T00:29:47.3796260Z         	Messages:   	Project creation failed: test-acc-tf-p-6193428438685314059, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.3797501Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (0.00s)
```

- 2025-05-12 PASS 3 seconds
- 2025-05-13
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-14 PASS 2 seconds
- 2025-05-15 PASS 2 seconds
- 2025-05-16 PASS 2 seconds
- 2025-05-17 PASS 2 seconds
- 2025-05-18 PASS 2 seconds
- 2025-05-19 PASS 3 seconds
- 2025-05-20 PASS 4 seconds
- 2025-05-21 PASS 2 seconds
- 2025-05-22 PASS 2 seconds
- 2025-05-23 PASS 2 seconds
- 2025-05-24 PASS 3 seconds
- 2025-05-25 PASS 2 seconds
- 2025-05-26 PASS 2 seconds
- 2025-05-27 PASS 2 seconds
- 2025-05-28
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-05-29 PASS 5 seconds
- 2025-05-30 PASS 2 seconds
- 2025-05-31 PASS 2 seconds
- 2025-06-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-06-02
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-06-03 PASS 2 seconds
- 2025-06-04 PASS 2 seconds
- 2025-06-05 PASS 3 seconds
- 2025-06-06 PASS 2 seconds
- 2025-06-07 PASS 3 seconds
- 2025-06-08 PASS 2 seconds
- 2025-06-09 PASS 2 seconds
- 2025-06-10 PASS 3 seconds
- 2025-06-11
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-06-12 PASS 2 seconds
- 2025-06-13 PASS 2 seconds
- 2025-06-14 PASS 2 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 3 seconds
- 2025-06-17 PASS 3 seconds
- 2025-06-18
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-19 PASS 4 seconds
- 2025-06-20 PASS 3 seconds
- 2025-06-21 PASS 3 seconds
- 2025-06-22 PASS 2 seconds
- 2025-06-23 PASS 5 seconds
- 2025-06-24 PASS 2 seconds
- 2025-06-25 PASS 2 seconds
- 2025-06-26 PASS 3 seconds
- 2025-06-27 PASS 3 seconds
- 2025-06-28 PASS 4 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 2 seconds
- 2025-07-01
  - PASS 4 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS 2 seconds
- 2025-07-04 PASS 2 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 2 seconds
- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 3 seconds
- 2025-07-09 PASS 3 seconds
- 2025-07-10 PASS 4 seconds