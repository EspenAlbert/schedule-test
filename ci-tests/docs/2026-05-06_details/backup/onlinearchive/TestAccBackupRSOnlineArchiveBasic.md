# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 8)
Success rate: 76.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters | dev | out_of_capacity | 55.02s
[2026-04-22 02:25](#error-2026-04-22t0225300000) |  | dev |  | 2696.03s
[2026-04-25 01:29](#error-2026-04-25t0129140000) |  | dev |  | 1417.05s
[2026-04-27 01:40](#error-2026-04-27t0140020000) |  | dev |  | 1526.06s
[2026-04-28 01:44](#error-2026-04-28t0144150000) |  | dev |  | 1981.04s
[2026-04-29 01:47](#error-2026-04-29t0147160000) |  | dev |  | 1746.06s
[2026-04-30 01:34](#error-2026-04-30t0134120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.10s
[2026-05-06 02:41](#error-2026-05-06t0241390000) |  | dev |  | 4892.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 28 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 43 minutes
- 2026-04-11 PASS 17 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 30 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 27 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8282467Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-16T01:05:00.8283045Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-3861739361579713530
2026-04-16T01:05:00.8286220Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-16T01:05:00.8287807Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-16T01:05:00.8288686Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:11.789236621Z, ProjectID: 69e032c181002038a8a0a6f1, Cluster name: test-acc-tf-c-1675916089674715715
2026-04-16T01:05:00.8302061Z   
2026-04-16T01:05:00.8302460Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2026-04-16T01:05:00.8302852Z         
2026-04-16T01:05:00.8303124Z         Error: Error in create
2026-04-16T01:05:00.8303394Z         
2026-04-16T01:05:00.8303774Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8304515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8305209Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8305569Z         
2026-04-16T01:05:00.8306147Z         cluster name: test-acc-tf-c-1675916089674715715, API error details:
2026-04-16T01:05:00.8306978Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters
2026-04-16T01:05:00.8307690Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8308357Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8308890Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8309270Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (55.21s)
```

- 2026-04-17 PASS 25 minutes
- 2026-04-18 PASS 25 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21 PASS 30 minutes
- 2026-04-22

### Error 2026-04-22T02:25:30+00:00
```
2026-04-22T02:25:30.0303529Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-22T02:25:30.0308708Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-22T02:25:30.0311065Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-22T02:25:30.0311966Z     pre_check.go:46: Time before creating cluster: 2026-04-22T01:40:43.130505471Z, ProjectID: 69e8270f2b44c110f3bc286f, Cluster name: test-acc-tf-c-1509132173845500893
2026-04-22T02:25:30.0349492Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-22T02:25:30.0350258Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-22T02:25:30.0353399Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2696.34s)
```

- 2026-04-23 PASS 31 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25

### Error 2026-04-25T01:29:14+00:00
```
2026-04-25T01:29:14.7042234Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-25T01:29:14.7049445Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-25T01:29:14.7061421Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-25T01:29:14.7062798Z     pre_check.go:46: Time before creating cluster: 2026-04-25T01:03:50.219899706Z, ProjectID: 69ec12da1e137e366f02d49a, Cluster name: test-acc-tf-c-1050516708295887651
2026-04-25T01:29:14.7098624Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-25T01:29:14.7099794Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:29:14.7101516Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1417.52s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:40:02+00:00
```
2026-04-27T01:40:02.9924052Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-27T01:40:02.9929779Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-27T01:40:02.9938327Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-27T01:40:02.9939215Z     pre_check.go:46: Time before creating cluster: 2026-04-27T01:12:33.970053469Z, ProjectID: 69eeb7eb3f007945e3a4279b, Cluster name: test-acc-tf-c-6265176958913898928
2026-04-27T01:40:02.9956314Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-27T01:40:02.9957088Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:40:02.9970962Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1526.55s)
```

- 2026-04-28

### Error 2026-04-28T01:44:15+00:00
```
2026-04-28T01:44:15.5199418Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-28T01:44:15.5205006Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-28T01:44:15.5215700Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-28T01:44:15.5217099Z     pre_check.go:46: Time before creating cluster: 2026-04-28T01:11:38.548778694Z, ProjectID: 69f0092e3c93ff81902e46e0, Cluster name: test-acc-tf-c-5085065904456402660
2026-04-28T01:44:15.5240811Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-28T01:44:15.5241558Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:44:15.5248456Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1981.35s)
```

- 2026-04-29

### Error 2026-04-29T01:47:16+00:00
```
2026-04-29T01:47:16.1617283Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-29T01:47:16.1627274Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-04-29T01:47:16.1640924Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-29T01:47:16.1642613Z     pre_check.go:46: Time before creating cluster: 2026-04-29T01:14:56.930027622Z, ProjectID: 69f15b762bb4e6756060b60d, Cluster name: test-acc-tf-c-655382279214254694
2026-04-29T01:47:16.1697480Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-04-29T01:47:16.1698391Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-29T01:47:16.1700072Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1746.63s)
```

- 2026-04-30

### Error 2026-04-30T01:34:12+00:00
```
2026-04-30T01:34:12.2304775Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-04-30T01:34:12.2305853Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-25612413420325211
2026-04-30T01:34:12.2306755Z     resource_test.go:123: 
2026-04-30T01:34:12.2308506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:34:12.2312354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:34:12.2315743Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:34:12.2319133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:34:12.2323057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-04-30T01:34:12.2325414Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:34:12.2326385Z         	Error:      	Received unexpected error:
2026-04-30T01:34:12.2330186Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:34:12.2332369Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-04-30T01:34:12.2335755Z         	Messages:   	Project creation failed: test-acc-tf-p-25612413420325211, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:34:12.2338226Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (104.96s)
```

- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 33 minutes
- 2026-05-05 PASS 45 minutes
- 2026-05-06

### Error 2026-05-06T02:41:39+00:00
```
2026-05-06T02:41:39.1389437Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-06T02:41:39.1395510Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-05-06T02:41:39.1401620Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-06T02:41:39.1402536Z     pre_check.go:46: Time before creating cluster: 2026-05-06T01:15:32.997149586Z, ProjectID: 69fa9622927d92ac31b41780, Cluster name: test-acc-tf-c-4169815634512566943
2026-05-06T02:41:39.1430682Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-06T02:41:39.1431451Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-05-06T02:41:39.1436539Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (4892.88s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 18 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 23 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
