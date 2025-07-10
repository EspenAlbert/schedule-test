# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa | 0.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS a minute
- 2025-04-13 PASS 55 seconds
- 2025-04-14 PASS a minute
- 2025-04-15 PASS 55 seconds
- 2025-04-16
  - PASS a minute
  - PASS a minute
- 2025-04-17 PASS a minute
- 2025-04-18 PASS a minute
- 2025-04-19 PASS a minute
- 2025-04-20 PASS 25 seconds
- 2025-04-21 PASS 15 seconds
- 2025-04-22 PASS 50 seconds
- 2025-04-23 PASS a minute
- 2025-04-24 PASS a minute
- 2025-04-25 PASS a minute
- 2025-04-26 PASS a minute
- 2025-04-27 PASS a minute
- 2025-04-28 PASS 50 seconds
- 2025-04-29 PASS 10 seconds
- 2025-04-30 PASS 55 seconds
- 2025-05-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-05-02 PASS a minute
- 2025-05-03 PASS a minute
- 2025-05-04 PASS a minute
- 2025-05-05 PASS a minute
- 2025-05-06 PASS a minute
- 2025-05-07 PASS 45 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS a minute
- 2025-05-10 PASS 50 seconds
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.3662469Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-05-11T00:30:10.4656416Z     shared_resource.go:84: 
2025-05-11T00:30:10.4658085Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.4660433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.4662503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.4664210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.4666144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:762
2025-05-11T00:30:10.4666956Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.4667796Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.4668504Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-05-11T00:30:10.4669591Z         	Messages:   	Project creation failed: test-acc-tf-p-7736699002813723500, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.4670393Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (0.10s)
```

- 2025-05-12 PASS a minute
- 2025-05-13
  - PASS a minute
  - PASS 30 seconds
- 2025-05-14 PASS a minute
- 2025-05-15 PASS a minute
- 2025-05-16 PASS a minute
- 2025-05-17 PASS a minute
- 2025-05-18 PASS a minute
- 2025-05-19 PASS a minute
- 2025-05-20 PASS a minute
- 2025-05-21 PASS a minute
- 2025-05-22 PASS a minute
- 2025-05-23 PASS a minute
- 2025-05-24 PASS a minute
- 2025-05-25 PASS 20 seconds
- 2025-05-26 PASS 50 seconds
- 2025-05-27 PASS 45 seconds
- 2025-05-28
  - PASS 55 seconds
  - PASS 40 seconds
  - PASS 40 seconds
- 2025-05-29
  - PASS a minute
  - PASS 30 seconds
- 2025-05-30
  - PASS 20 seconds
  - PASS 30 seconds
- 2025-05-31 PASS a minute
- 2025-06-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-02
  - PASS a minute
  - PASS a minute
  - PASS 25 seconds
- 2025-06-03 PASS a minute
- 2025-06-04 PASS 55 seconds
- 2025-06-05 PASS a minute
- 2025-06-06 PASS a minute
- 2025-06-07 PASS 40 seconds
- 2025-06-08 PASS a minute
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS a minute
- 2025-06-11
  - PASS a minute
  - PASS 6 seconds
- 2025-06-12 PASS 40 seconds
- 2025-06-13 PASS a minute
- 2025-06-14 PASS a minute
- 2025-06-15 PASS 45 seconds
- 2025-06-16 PASS 50 seconds
- 2025-06-17 PASS a minute
- 2025-06-18
  - PASS 25 seconds
  - PASS a minute
- 2025-06-19 PASS 40 seconds
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22 PASS 6 seconds
- 2025-06-23 PASS a minute
- 2025-06-24 PASS 25 seconds
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29 PASS a minute
- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS 40 seconds
  - PASS a minute
  - PASS a minute
  - PASS 30 seconds
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06 PASS a minute
- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute