# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:31](#error-2025-07-14t0331410000) |  | dev | timeout | 10805.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 14 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 14 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 15 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 16 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-07-11 PASS 14 minutes
- 2025-07-12 PASS 14 minutes
- 2025-07-13 PASS 19 minutes
- 2025-07-14

### Error 2025-07-14T03:31:41+00:00
```
2025-07-14T03:31:41.0064026Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-07-14T03:31:41.0074410Z   
2025-07-14T03:31:41.0075142Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:41.0075643Z         
2025-07-14T03:31:41.0076415Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:41.0077020Z         
2025-07-14T03:31:41.0077433Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:41.0078204Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:41.0079092Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:41.0079651Z         
2025-07-14T03:31:41.0080074Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (10805.88s)
```

- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-07-24 PASS 14 minutes