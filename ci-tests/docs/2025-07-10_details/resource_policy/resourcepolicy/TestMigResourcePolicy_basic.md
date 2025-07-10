# resource_policy/resourcepolicy/TestMigResourcePolicy_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 2) SKIP
Success rate: 98.21%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-04-16 00:27](#error-2025-04-16t0027000000) |  | dev | 1.04s
[2025-05-11 00:29](#error-2025-05-11t0029420000) |  | qa | 1.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 7 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:27:00+00:00
```
2025-04-16T00:27:00.9472762Z === RUN   TestMigResourcePolicy_basic
2025-04-16T00:27:02.2917212Z   
2025-04-16T00:27:02.2918135Z     resource_migration_test.go:17: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-04-16T00:27:02.2918932Z         
2025-04-16T00:27:02.2919949Z         Error: Invalid resource type
2025-04-16T00:27:02.2920419Z         
2025-04-16T00:27:02.2921422Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_resource_policy" "test":
2025-04-16T00:27:02.2922499Z           14: resource "mongodbatlas_resource_policy" "test" {
2025-04-16T00:27:02.2923010Z         
2025-04-16T00:27:02.2923736Z         The provider mongodb/mongodbatlas does not support resource type
2025-04-16T00:27:02.2924512Z         "mongodbatlas_resource_policy".
2025-04-16T00:27:02.2924973Z         
2025-04-16T00:27:02.2925441Z         Error: Invalid data source
2025-04-16T00:27:02.2925879Z         
2025-04-16T00:27:02.2926884Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_resource_policy" "test":
2025-04-16T00:27:02.2927965Z           37: data "mongodbatlas_resource_policy" "test" {
2025-04-16T00:27:02.2928510Z         
2025-04-16T00:27:02.2929294Z         The provider mongodb/mongodbatlas does not support data source
2025-04-16T00:27:02.2930267Z         "mongodbatlas_resource_policy".
2025-04-16T00:27:02.2930793Z         
2025-04-16T00:27:02.2931318Z         Error: Invalid data source
2025-04-16T00:27:02.2931817Z         
2025-04-16T00:27:02.2932802Z           on terraform_plugin_test.tf line 41, in data "mongodbatlas_resource_policies" "test":
2025-04-16T00:27:02.2933889Z           41: data "mongodbatlas_resource_policies" "test" {
2025-04-16T00:27:02.2934460Z         
2025-04-16T00:27:02.2935517Z         The provider mongodb/mongodbatlas does not support data source
2025-04-16T00:27:02.2936304Z         "mongodbatlas_resource_policies".
2025-04-16T00:27:02.3840706Z --- FAIL: TestMigResourcePolicy_basic (1.44s)
```

  - SKIP unknown
- 2025-04-17 PASS 11 seconds
- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 10 seconds
- 2025-04-20 PASS 5 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 6 seconds
- 2025-04-25 PASS 7 seconds
- 2025-04-26 PASS 18 seconds
- 2025-04-27 PASS 10 seconds
- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 10 seconds
- 2025-05-04 PASS 6 seconds
- 2025-05-05 PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07 PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 11 seconds
- 2025-05-10 PASS 10 seconds
- 2025-05-11

### Error 2025-05-11T00:29:42+00:00
```
2025-05-11T00:29:42.6427501Z === RUN   TestMigResourcePolicy_basic
2025-05-11T00:29:44.5261898Z   
2025-05-11T00:29:44.5262440Z     resource_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-05-11T00:29:44.5262883Z         
2025-05-11T00:29:44.5263276Z         Error: Policy Validation failed (name=test-policy): 
2025-05-11T00:29:44.5263629Z         
2025-05-11T00:29:44.5263968Z           with mongodbatlas_resource_policy.test,
2025-05-11T00:29:44.5264608Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_resource_policy" "test":
2025-05-11T00:29:44.5265200Z           14: resource "mongodbatlas_resource_policy" "test" {
2025-05-11T00:29:44.5265515Z         
2025-05-11T00:29:44.5265974Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:44.5266575Z         type
2025-05-11T00:29:44.6144067Z --- FAIL: TestMigResourcePolicy_basic (1.97s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 8 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 6 seconds
- 2025-05-17 PASS 10 seconds
- 2025-05-18 PASS 5 seconds
- 2025-05-19 PASS 10 seconds
- 2025-05-20 PASS 5 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22 PASS 9 seconds
- 2025-05-23 PASS 7 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 7 seconds
- 2025-05-27 PASS 6 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-05-29 PASS 8 seconds
- 2025-05-30 PASS 7 seconds
- 2025-05-31 PASS 6 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 10 seconds
- 2025-06-05 PASS 10 seconds
- 2025-06-06 PASS 7 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 10 seconds
- 2025-06-09 PASS 7 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 10 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 5 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18 PASS 6 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 10 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22 PASS 5 seconds
- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 11 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 11 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 6 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 6 seconds