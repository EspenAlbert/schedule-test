# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-06-03 01:14](#error-2026-06-03t0114480000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 39 seconds
- 2026-05-08 PASS 36 seconds
- 2026-05-09 PASS 4 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 48 seconds
- 2026-05-12 PASS 41 seconds
- 2026-05-13 PASS 36 seconds
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 36 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 39 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 38 seconds
- 2026-05-21 PASS 3 minutes
- 2026-05-22 PASS 39 seconds
- 2026-05-23 PASS 52 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 3 minutes
- 2026-05-29 PASS 47 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 seconds
- 2026-06-02 PASS 44 seconds
- 2026-06-03

### Error 2026-06-03T01:14:48+00:00
```
2026-06-03T01:14:48.7189215Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-06-03T01:14:48.7189838Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-4918862704034090975
2026-06-03T01:14:53.7178576Z     resource_test.go:31: 
2026-06-03T01:14:53.7180103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-03T01:14:53.7182974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-03T01:14:53.7186047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-03T01:14:53.7189358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:137
2026-06-03T01:14:53.7191256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:31
2026-06-03T01:14:53.7192459Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-03T01:14:53.7193018Z         	Error:      	Received unexpected error:
2026-06-03T01:14:53.7194079Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-03T01:14:53.7195349Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-06-03T01:14:53.7196508Z         	Messages:   	Project creation failed: test-acc-tf-p-4918862704034090975, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-03T01:14:53.7197304Z --- FAIL: TestAccFlexClusterRS_failedUpdate (5.00s)
```

- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 37 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
