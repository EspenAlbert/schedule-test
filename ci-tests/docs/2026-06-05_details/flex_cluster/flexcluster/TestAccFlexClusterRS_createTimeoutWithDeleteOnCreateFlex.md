# flex_cluster/flexcluster/TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-06-02 01:09](#error-2026-06-02t0109220000) |  | dev | timeout | 602.09s
[2026-06-03 01:14](#error-2026-06-03t0114530000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09 PASS 3 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 seconds
- 2026-05-12 PASS 2 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 52 seconds
- 2026-05-16 PASS 55 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 53 seconds
- 2026-05-21 PASS 2 minutes
- 2026-05-22 PASS 32 seconds
- 2026-05-23 PASS 54 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS 34 seconds
- 2026-05-27 PASS 6 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 31 seconds
- 2026-05-30 PASS 55 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02

### Error 2026-06-02T01:09:22+00:00
```
2026-06-02T01:09:22.2372346Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-06-02T01:09:22.2376945Z === CONT  TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-06-02T01:09:25.0256070Z   diagnostic_summary=
2026-06-02T01:09:25.0266753Z    tf_req_id=a6da24e9-86fc-a98f-9815-e0226b28b1da tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-06-02T01:19:25.0848752Z     resource_test.go:45: 
2026-06-02T01:19:25.0850521Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:65
2026-06-02T01:19:25.0855310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:45
2026-06-02T01:19:25.0857300Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/testing/testing.go:1317
2026-06-02T01:19:25.0858678Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/testing/testing.go:1667
2026-06-02T01:19:25.0859634Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/testing/testing.go:2030
2026-06-02T01:19:25.0860545Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:19:25.0861074Z         	Error:      	Received unexpected error:
2026-06-02T01:19:25.0862040Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'IDLE', timeout: 10m0s)
2026-06-02T01:19:25.0862785Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-06-02T01:19:25.0863491Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (602.85s)
```

- 2026-06-03

### Error 2026-06-03T01:14:53+00:00
```
2026-06-03T01:14:53.7197782Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-06-03T01:14:53.7198748Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-3615279473938966285
2026-06-03T01:14:58.7188014Z     resource_test.go:37: 
2026-06-03T01:14:58.7189809Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-03T01:14:58.7192606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-03T01:14:58.7195437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-03T01:14:58.7198764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:37
2026-06-03T01:14:58.7200061Z         	Error:      	Received unexpected error:
2026-06-03T01:14:58.7201828Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-03T01:14:58.7203055Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-06-03T01:14:58.7204945Z         	Messages:   	Project creation failed: test-acc-tf-p-3615279473938966285, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-03T01:14:58.7206321Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (5.00s)
```

- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 32 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 42 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
