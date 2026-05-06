# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters | dev | out_of_capacity | 10.08s
[2026-04-25 01:29](#error-2026-04-25t0129140000) |  | dev |  | 1548.10s
[2026-04-27 01:40](#error-2026-04-27t0140020000) |  | dev |  | 1577.03s
[2026-04-28 01:44](#error-2026-04-28t0144150000) |  | dev |  | 1932.05s
[2026-04-29 01:47](#error-2026-04-29t0147160000) |  | dev |  | 1757.05s
[2026-05-06 02:41](#error-2026-05-06t0241390000) |  | dev |  | 4892.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 24 minutes
- 2026-04-09 PASS 29 minutes
- 2026-04-10 PASS 42 minutes
- 2026-04-11 PASS 14 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 22 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8285505Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-16T01:05:00.8286693Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-16T01:05:00.8309655Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-16T01:05:00.8310539Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:16.78953112Z, ProjectID: 69e032c181002038a8a0a6f1, Cluster name: test-acc-tf-c-2827130730060066413
2026-04-16T01:05:00.8323797Z   
2026-04-16T01:05:00.8324206Z     resource_test.go:536: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8324593Z         
2026-04-16T01:05:00.8324870Z         Error: Error in create
2026-04-16T01:05:00.8325139Z         
2026-04-16T01:05:00.8325525Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8326389Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8327109Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8327471Z         
2026-04-16T01:05:00.8327915Z         cluster name: test-acc-tf-c-2827130730060066413, API error details:
2026-04-16T01:05:00.8328608Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters
2026-04-16T01:05:00.8329319Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8330138Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8330676Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8331087Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (10.76s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 23 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 minutes
- 2026-04-21 PASS 28 minutes
- 2026-04-22 PASS 43 minutes
- 2026-04-23 PASS 32 minutes
- 2026-04-24 PASS 18 minutes
- 2026-04-25

### Error 2026-04-25T01:29:14+00:00
```
2026-04-25T01:29:14.7045993Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-25T01:29:14.7047661Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-25T01:29:14.7050005Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-25T01:29:14.7052454Z     pre_check.go:46: Time before creating cluster: 2026-04-25T01:03:30.209953756Z, ProjectID: 69ec12da1e137e366f02d49a, Cluster name: test-acc-tf-c-791729865913723125
2026-04-25T01:29:14.7106117Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-25T01:29:14.7107279Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:29:14.7108288Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1548.95s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:40:02+00:00
```
2026-04-27T01:40:02.9926869Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-27T01:40:02.9928900Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-27T01:40:02.9934944Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-27T01:40:02.9935872Z     pre_check.go:46: Time before creating cluster: 2026-04-27T01:12:23.964022325Z, ProjectID: 69eeb7eb3f007945e3a4279b, Cluster name: test-acc-tf-c-1167040222961055675
2026-04-27T01:40:02.9969362Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-27T01:40:02.9970123Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:40:02.9976146Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1577.27s)
```

- 2026-04-28

### Error 2026-04-28T01:44:15+00:00
```
2026-04-28T01:44:15.5202118Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-28T01:44:15.5204105Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-28T01:44:15.5205421Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-28T01:44:15.5208332Z     pre_check.go:46: Time before creating cluster: 2026-04-28T01:11:18.5378314Z, ProjectID: 69f0092e3c93ff81902e46e0, Cluster name: test-acc-tf-c-197624230524583019
2026-04-28T01:44:15.5245167Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-28T01:44:15.5245933Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:44:15.5248009Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1932.53s)
```

- 2026-04-29

### Error 2026-04-29T01:47:16+00:00
```
2026-04-29T01:47:16.1622048Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-29T01:47:16.1625898Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-29T01:47:16.1634614Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-29T01:47:16.1636344Z     pre_check.go:46: Time before creating cluster: 2026-04-29T01:14:46.923212877Z, ProjectID: 69f15b762bb4e6756060b60d, Cluster name: test-acc-tf-c-7183198534053865405
2026-04-29T01:47:16.1678308Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-04-29T01:47:16.1680053Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-29T01:47:16.1701605Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1757.48s)
```

- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 23 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 minutes
- 2026-05-05 PASS 43 minutes
- 2026-05-06

### Error 2026-05-06T02:41:39+00:00
```
2026-05-06T02:41:39.1392784Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-06T02:41:39.1395038Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-06T02:41:39.1397220Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-06T02:41:39.1398468Z     pre_check.go:46: Time before creating cluster: 2026-05-06T01:15:22.993111906Z, ProjectID: 69fa9622927d92ac31b41780, Cluster name: test-acc-tf-c-3555051285633082208
2026-05-06T02:41:39.1421585Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-06T02:41:39.1422397Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-05-06T02:41:39.1436088Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (4892.87s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
